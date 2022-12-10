import Bot, { Message } from "rompot";
import settings from "../settings";
import commands from "../commands";

export default async function runCommand(bot: Bot, message: Message) {
    if (!isCommand(message.getText())) return;
    
    const commandName = getCommandName(message.getText());
    commands[commandName](bot, message);
}

function isCommand(text: string): boolean {
    const prefix = text.substring(0, 1);
    
    if (!settings.prefixes.includes(prefix))
        return false;

    const commandName = getCommandName(text);
    return Object.keys(commands).includes(commandName);
}

function getCommandName(text: string): string {
    return text
        .substring(1)
        .trim()
        .split(" ")[0]
        .toLowerCase();
}