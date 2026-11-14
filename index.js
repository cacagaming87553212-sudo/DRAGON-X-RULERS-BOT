require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log("================================");
    console.log("🐉 DRAGON X RULERS BOT");
    console.log("================================");
    console.log(`Logged in as: ${client.user.tag}`);
    console.log("Bot is online!");
});

client.login(process.env.DISCORD_TOKEN);