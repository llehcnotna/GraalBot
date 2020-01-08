const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >help
    
    if(args[0] === 'bandit'){
        message.reply('**Usage:** \`g>bandit\`');
        return;
    };
    if(args[0] === 'botinfo'){
        message.reply('**Usage:** \`g>botinfo\`');
        return;
    };
    if(args[0] === 'bounty'){
        message.reply('**Usage:** \`g>bounty\`');
        return;
    };
    if(args[0] === 'bugs'){
        message.reply('**Usage:** \`g>bugs <name>\`');
        return;
    };
    if(args[0] === 'help'){
        message.reply('**Usage:** \`g>help\`');
        return;
    };
    if(args[0] === 'loot'){
        message.reply('**Usage:** \`g>loot location\`');
        return;
    };
    if(args[0] === 'maps'){
        message.reply('**Usage:** \`g>maps\`');
        return;
    };
    if(args[0] === 'ping') {
        message.reply('**Usage:** \`g>ping\`');
        return;
    };
    if(args[0] === 'shields'){
        message.reply('**Usage:** \`g>shields\`');
        return;
    };
    if(args[0] === 'swords'){
        message.reply('**Usage:** \`g>swords\`');
        return;
    };
    if(args[0] === 'spoils'){
        message.reply('**Usage:** \`g>spoils\`');
        return;
    };
    if(args[0] === 'uptime'){
        message.reply('**Usage:** \`g>uptime\`');
        return;
    };

    message.channel.send(`**${message.author.username}**, Check your DM's!`).then(function (message) {
        message.react('🗨');
    });

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
    .addField('loot', 'Loot Command.')
    .addField(`maps`, 'Sends a link for GraalMaps.')
    .addField(`ping`, 'Gets the bot\'s ping.')
    .addField(`shields`, 'Sends a link for Taylor Richaards shields.')
    .addField(`swords`, 'Sends a link for Taylor Richaards swords.')
    .addField(`spoils`, 'Sends a reminder for the Giant Blob Boss.')
    .addField(`uptime`, 'Shows how long the bot has been running for.')

    message.author.send(helpEmbed);
};

module.exports.help = {
    name: 'help',
    aliases: ['h']
};
