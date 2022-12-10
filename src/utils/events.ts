import Bot from "rompot";
import settings from "../settings";

export default function listenEvents(bot: Bot) {
    //OnConnect
    bot.on("connection", (update: { action: string }) => {
        if (update.action == "open") console.log(settings.startup_message);
    });
}