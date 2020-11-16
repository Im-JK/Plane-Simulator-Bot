const fs = require('fs');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name:"help",
    description:"lists all commands",
    execute(help, args, prefix) {
        help.channel.send( new MessageEmbed().setTitle("**Command List**").setDescription("Prefix : *"+prefix+"*\n`"+prefix+"create` - *Creates a plane*\n`"+prefix+"delete` - *Deletes your plane*\n`"+prefix+"flight <easy|medium|hard>` - *Starts flying your plane for coins*\n`"+prefix+"setname <name>` - *Set's your planes name*\n`"+prefix+"stats` - *Shows your planes stats*").setColor("BLUE"));
    }
}