const fs = require('fs')

const { MessageEmbed } = require("discord.js");
module.exports = {
    name:"stats",
    description:"gets the stats of the user",
    execute(statistics, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const user = statistics.mentions.users.first() || statistics.author;
        if (!stats[user.id]) {
            if (user != statistics.author) {
                statistics.channel.send("That player hasn't created a plane");
            } else {
                statistics.channel.send("Please create a plane first with `"+prefix+"create`");
            }
        } else {
            //Displays users stats
            statistics.channel.send(new MessageEmbed().setTitle("**"+user.username+"'s Plane**").setDescription("Plane Name : "+stats[user.id].planeName+"\nCoin Modifier : "+stats[user.id].coinModifier+"\nTime Modifier : "+stats[user.id].timeModifier+"\nCoins : "+stats[user.id].coins).setColor("BLUE"));
        }
    }
}