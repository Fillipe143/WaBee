import Bot, { WhatsAppBot } from "rompot";
import settings from "../settings";

export default function connect(): Bot {
    const bot = new Bot(new WhatsAppBot());
    bot.build(settings.auth_path);
    
    return bot;
}