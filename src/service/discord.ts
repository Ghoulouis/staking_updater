import { Client, GatewayIntentBits, TextChannel } from "discord.js";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const channelId = process.env.LOG_CHANNEL_ID!;

class Discord {
    async setup() {
        await client.login(process.env.DISCORD_TOKEN!);
        client.once("ready", async () => {
            this.log("Discord bot is online");
        });
    }

    async log(message: string) {
        console.log(message);
        const channel = client.channels.cache.get(channelId);
        const messageStr = `\`\`\`${message}\`\`\``;
        if (channel && channel.isTextBased()) {
            await (channel as TextChannel).send(messageStr);
        }
    }
}

export const discord = new Discord();
