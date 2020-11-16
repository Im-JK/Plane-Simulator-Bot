const Discord = require('discord.js');

const client = new Discord.Client();

const { MessageEmbed } = require("discord.js");

const prefix = '!ps';

const fs = require('fs');

client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./GameBotCommands/').filter(file => file.endsWith('.js'));
for (const file of CommandFiles){
    const command = require(`./GameBotCommands/${file}`);

    client.commands.set(command.name,command);
}

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command == "help" || command == "create" || command == "delete" || command == "flight" || command == "setname" || command == "stats" || command == "upgrade") {
        client.commands.get(command).execute(message, args, prefix);
    }
})
client.login('Hidden');
