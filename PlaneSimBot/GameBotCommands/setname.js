const fs = require('fs')
module.exports = {
    name:"setname",
    description:"set the plane's name",
    execute(setname, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const user = setname.author;
        if (!stats[user.id]) {
            //tests if the user hasnt created a plane
            setname.channel.send("Please create a plane first with `"+prefix+"create`");
        } else {
            stats[user.id].planeName = args.join(' ');
            fs.writeFileSync('stats.json', JSON.stringify(stats));
        }
    }
}