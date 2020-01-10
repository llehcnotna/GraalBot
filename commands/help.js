const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >help

    if(args[0] === 'bandit'){
        message.channel.send(`\`\`\`${config.prefix}bandit\n\nSets a reminder for when you can claim bandit chests.\n\nDISABLED\`\`\``);
        return;
    };
    if(args[0] === 'botinfo'){
        message.channel.send(`\`\`\`${config.prefix}botinfo\n\nShows information of this bot.\`\`\``);
        return;
    };
    if(args[0] === 'bounty'){
        message.channel.send(`\`\`\`${config.prefix}bounty\n\nSets a reminder for when you can get another crate from castle.\n\nDISABLED\`\`\``);
        return;
    };
    if(args[0] === 'bugs'){
        message.channel.send(`\`\`\`${config.prefix}bugs <name>\n\nGets information about the bugs in GraalClassic.\`\`\``);
        return;
    };
    if(args[0] === 'help'){
        message.channel.send(`\`\`\`${config.prefix}help\n\nShows default help message.\`\`\``);
        return;
    };
    if(args[0] === 'loot'){
        message.channel.send(`\`\`\`${config.prefix}loot <location>\n\nGets a list of locations where you can sell your loot.\`\`\``);
        return;
    };
    if(args[0] === 'maps'){
        message.channel.send(`\`\`\`${config.prefix}maps\n\nSends map website.\`\`\``);
        return;
    };
    if(args[0] === 'ping') {
        message.channel.send(`\`\`\`${config.prefix}ping\n\nPings the bot.\`\`\``);
        return;
    };
    if(args[0] === 'shields'){
        message.channel.send(`\`\`\`${config.prefix}shields\n\nSends link to Taylor Richaards shield site.\`\`\``);
        return;
    };
    if(args[0] === 'swords'){
        message.channel.send(`\`\`\`${config.prefix}swords\n\nSends link to Taylor Richaards sword site.\`\`\``);
        return;
    };
    if(args[0] === 'spoils'){
        message.channel.send(`\`\`\`${config.prefix}spoils\n\nSets a reminder for when you can claim spoils from the Giant Blob.\n\nDISABLED\`\`\``);
        return;
    };
    if(args[0] === 'uptime'){
        message.channel.send(`\`\`\`${config.prefix}uptime\n\nShows current sessions uptime.\`\`\``);
        return;
    };

    if(!args[0]) {
    let helpEmbed = new Discord.RichEmbed()
    .setColor('')
    .setTitle('**GraalBot Help**')
    .setDescription(`Prefix: **${config.prefix}**`)
    .addField('**__Commands__**', `For more information on a specific command use \`${config.prefix}help <command>\``)
    .addField(`bandit`, 'Sends a reminder to do bandit chests.')
    .addField(`botinfo`, 'Sends information about this bot.')
    .addField(`bounty`, 'Sends a reminder to do the daily bounty quest.')
    .addField(`bugs`, 'Sends a list of all the catchable bugs on GraalClassic.')
    .addField(`help`, 'Sends this message.')
    .addField('loot', 'Sends loot menu.')
    .addField(`maps`, 'Sends a link for GraalMaps.')
    .addField(`ping`, 'Gets the bot\'s ping.')
    .addField(`shields`, 'Sends a link for Taylor Richaards shields.')
    .addField(`swords`, 'Sends a link for Taylor Richaards swords.')
    .addField(`spoils`, 'Sends a reminder for the Giant Blob Boss.')
    .addField(`uptime`, 'Shows how long the bot has been running for.')

    message.author.send(helpEmbed);

    } else {
        let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
        if(!command) return message.channel.send(`No command called "${args}" found.`)
    };
};

module.exports.help = {
    name: 'help',
    aliases: ['h']
};
