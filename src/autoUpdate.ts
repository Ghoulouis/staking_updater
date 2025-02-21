import { ethers, Wallet } from "ethers";
import { CONFIG, PROVIDER } from "./config";
import { PegKeeperV1__factory, Univ3__factory, Vault_ATI__factory, Vault_LP_ATIHOLD__factory } from "./typechain-types";
import { Mutex } from "async-mutex";
import { discord } from "./service/discord";
import BigNumber from "bignumber.js";

function getSqrtRatioAtTick(tick: number): BigNumber {
    return new BigNumber(Math.floor(Math.sqrt(1.0001 ** tick) * 2 ** 96));
}

export async function setupAuto() {
    await auto();
    scheduleNextRun();
}
const mutex = new Mutex();

function getRandomTime() {
    const minSeconds = 30;
    const maxSeconds = 60;
    const randomSeconds = Math.random() * (maxSeconds - minSeconds) + minSeconds;
    return randomSeconds * 1000;
}

function scheduleNextRun() {
    const randomTime = getRandomTime();
    setTimeout(async () => {
        await mutex.runExclusive(async () => {
            await auto();
        });
        scheduleNextRun();
    }, randomTime);
}

async function auto() {
    await updatePoolATI();
    await updatePoolLP();
}

async function updatePoolATI() {
    const address_vault = "0xe7cba85D2Fc1C858CdB472b3121D11753882C885";
    const vault_token = Vault_ATI__factory.connect(address_vault, PROVIDER);
    const total_staked = await vault_token.totalStaked();
    const apy = BigNumber(0.2);
    const rps = BigNumber(total_staked.toString())
        .times(BigNumber(apy))
        .dividedBy(365)
        .dividedBy(24 * 60 * 60);
    const rps_new = rps.toFixed(0);
    const rps_old = await vault_token.rps();
    let txResponse, txReceipt;
    console.log("update rps token ", rps_old.toString(), " ->", rps_new.toString());
    if (Math.abs(Number(rps_old) - Number(rps_new)) > Number(rps_old) / 50) {
        // const caller = new Wallet(process.env.PRIVATE_KEY!, PROVIDER);
        // discord.log(`Update rps from ${rps_old} to ${rps_new}`);
        // txResponse = await vault_token.connect(caller).updateRps(rps_new);
        // txReceipt = await txResponse.wait();
        // discord.log(`Transaction hash: ${txReceipt!.hash}`);
    }
}

async function updatePoolLP() {
    const address_vault = "0x310Eabb1140e4De3dFD633918900f981612A3Dc9";
    const pool_address = "0x9aef6241c191fed841ca45120cefd582ca8fd0d9";

    const pool = Univ3__factory.connect(pool_address, PROVIDER);
    const vault = Vault_LP_ATIHOLD__factory.connect(address_vault, PROVIDER);

    let slot0 = await pool.slot0();
    let sqrtPriceX96 = new BigNumber(slot0.sqrtPriceX96.toString());

    let tickUpper = -887270;
    let tickLower = 887270;
    let liquidity = new BigNumber((await vault.totalStaked()).toString());

    let sqrtPriceLowerX96 = getSqrtRatioAtTick(Number(tickLower));
    let sqrtPriceUpperX96 = getSqrtRatioAtTick(Number(tickUpper));

    let { amount0, amount1 } = getAmountsForLiquidity(liquidity, sqrtPriceX96, sqrtPriceLowerX96, sqrtPriceUpperX96);

    // Tính tỷ lệ giá token0/token1 từ sqrtPriceX96
    let priceRatio = sqrtPriceX96.div(new BigNumber(2).pow(96)).pow(2);
    let numberATI = BigNumber(ethers.formatEther(amount0.toFixed(0)));
    let numberHOLD = BigNumber(ethers.formatEther(amount1.toFixed(0)));

    // Tổng giá trị pool theo token0
    let totalValueInToken0 = numberATI.plus(numberHOLD.times(priceRatio));

    let apy = new BigNumber(0.5);
    let rewardPerDay = totalValueInToken0.times(apy).div(365);
    let rps = rewardPerDay.div(24).div(60).div(60);
    let atiPs = rps.toFixed(17);

    const rpsOffChain = ethers.parseEther(atiPs);
    const rpsOnChain = await vault.rps();

    console.log("update rps lp ", rpsOnChain.toString(), " ->", rpsOffChain.toString());

    if (Math.abs(Number(rpsOnChain) - Number(rpsOffChain)) > Number(rpsOnChain) / 50) {
        console.log(rpsOnChain.toString(), " ->", rpsOffChain.toString());
        // const caller = new Wallet(process.env.PRIVATE_KEY!, PROVIDER);
        // discord.log(`Update rps from ${rpsOnChain} to ${rpsOffChain}`);
        // txResponse = await vault.connect(caller).updateRps(rpsOffChain);
        // txReceipt = await txResponse.wait();
        // discord.log(`Transaction hash: ${txReceipt!.hash}`);
    }
}

function getAmountsForLiquidity(
    liquidity: BigNumber,
    sqrtPriceX96: BigNumber,
    sqrtPriceLowerX96: BigNumber,
    sqrtPriceUpperX96: BigNumber
) {
    let amount0 = new BigNumber(0);
    let amount1 = new BigNumber(0);
    let sqrtPriceUpper = sqrtPriceUpperX96.div(new BigNumber(2).pow(96));
    let sqrtPrice = sqrtPriceX96.div(new BigNumber(2).pow(96));
    amount0 = liquidity.times(sqrtPriceUpper.minus(sqrtPrice)).div(sqrtPriceUpper.times(sqrtPrice));
    amount1 = liquidity.times(sqrtPriceX96.minus(sqrtPriceLowerX96)).div(new BigNumber(2).pow(96));
    return { amount0, amount1 };
}
