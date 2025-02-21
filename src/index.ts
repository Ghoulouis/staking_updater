import { setupAuto } from "./autoUpdate";
import "./config";
import { discord } from "./service/discord";

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () {
    return Number(this);
};

async function main() {
    await discord.setup();
    await setupAuto();
}
main();
