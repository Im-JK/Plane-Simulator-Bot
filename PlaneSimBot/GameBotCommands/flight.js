const fs = require('fs')
const { MessageEmbed, Message } = require("discord.js");
const inFlight = new Set();
module.exports = {
    name:"flight",
    description:"begins flight",
    execute(fly, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const Cities = JSON.parse(fs.readFileSync('cities.json'));
        const user = fly.author;
        if (!stats[user.id]){
            fly.channel.send("Please create a plane first with `"+prefix+"create`") } else if (inFlight.has(user.id)) 
            {fly.reply("You are currently in a flight") } else {
            if (!Cities[args[0]]) { fly.reply("Please specify weather you want a easy, medium, or hard flight") } else {
                const flight = Cities[args[0]][Math.floor(Math.random() * Object.keys(Cities[args[0]]).length)];
                const destination = (Math.floor(Math.random()*2)+1);
                var place;
                if (destination == 1) { place = 2 } else { place = 1 }
                fly.reply("You're flying "+stats[user.id].planeName+" to "+flight[destination]+" from "+flight[place]+" for "+(flight.time*stats[user.id].timeModifier)+" hours.\n *You will recieve "+(flight.money*stats[user.id].coinModifier)+" coins*");
                inFlight.add(user.id);
                setTimeout(() => {
                    inFlight.delete(user.id);
                    stats[user.id].coins += (flight.money*stats[user.id].coinModifier);
                    fs.writeFileSync('stats.json', JSON.stringify(stats));
                }, (flight.time * 60000)*stats[user.id].timeModifier)
            }
        }
    }
}
