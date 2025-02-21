import { Wallet } from "ethers";

// Generate a random wallet (which includes a private key)
const wallet = Wallet.createRandom();

// Get the private key from the wallet
const privateKey = wallet.privateKey;

console.log("Generated Private Key:", privateKey);
