import Bot, { WhatsAppBot } from "rompot";
import settings from "../settings";

export default function connect(): Bot {
    const bot = new Bot(new WhatsAppBot());
    bot.build(settings.auth_path);

    bot.on("connection", (update: { action: string }) => {
        if (update.action == "open") console.log(settings.startup_message);
    });

    return bot;
}