import Bot, { Message } from "rompot";
import settings from "../settings";
import { runCommand } from "./";

export default function listenEvents(bot: Bot) {
    //OnConnect
    bot.on("connection", (update: { action: string }) => {
        if (update.action == "open") console.log(settings.startup_message);
    });

    //OnMessage
    bot.on("message", async (message: Message) => {
        await runCommand(bot, message);
    });
}