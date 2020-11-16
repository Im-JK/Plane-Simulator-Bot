const fs = require('fs');
module.exports = {
    name: "upgrade",
    description: "upgrade your plane",
    execute(up, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const user = fly.author;
        if (!stats[user.id]){
            fly.channel.send("Please create a plane first with `"+prefix+"create`") 
        } else {
            const cost = (stats[user.id].planeTier * 2) * 5;
            if (stats[user.id].coins < cost) {
                up.reply("You dont have enough money to upgade "+stats[user.id].planeName+", you need "+(cost-stats[user.id].coins)+" more coins for the upgrade.");
            } else {
                up.reply("Upgraded "+stats[user.id].planeName+" for "+cost+" coins. Next upgrade is "+2*cost+" coins.");
                stats[user.id].planeTier += 1;
                stats[user.id].coinModifier += 0.02;
                stats[user.id].timeModifier -= 0.02;
            }
        }
    }
}