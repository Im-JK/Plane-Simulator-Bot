const fs = require('fs')
module.exports = {
    name:"delete",
    description:"remove a character",
    execute(remove, args, prefix) {
        const stats = JSON.parse(fs.readFileSync('stats.json'));
        const user = remove.author;
        if (stats[user.id]) {
            remove.reply("Deleted "+stats[user.id].planeName);
            delete stats[user.id];
            fs.writeFileSync('stats.json', JSON.stringify(stats));
        } else {
            remove.reply("you dont even have a plane yet!!!");
        }
    }
}