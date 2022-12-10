import Bot, { Message } from "rompot";

export default function hello(bot: Bot, message: Message) {
    const text = `Hello ${message.getUser().getName()}!`
    message.reply(text);
}