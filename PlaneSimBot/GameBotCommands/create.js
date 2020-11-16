const fs = require('fs')
module.exports = {
    name:"create",
    description:"create a character",
    execute(create, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const user = create.author;
        if (!stats[user.id]) {
            stats[user.id] = {
                //setting up base stats for characters
                planeName : user.username+"'s plane",
                coinModifier : 1.02,
                timeModifier : 0.98,
                planeTier : 1,
                coins : 10,
            }
            fs.writeFileSync('stats.json', JSON.stringify(stats));
            create.channel.send(`${user} has successfully created their character!`);
        } else {
            create.channel.send(`You have already made a character, ${stats[user.id].name}`);
        }
    }
}
