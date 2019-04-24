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
    if(args[0] === 'mpas'){
        message.reply('**Usage:** \`g>maps\`');
        return;
    };
    if(args[0] === 'ping') {
        message.reply('**Usage:** \`g>ping\`');
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
    .addField(`${config.prefix}bandit`, 'Sends a reminder to do bandit chests.')
    .addField(`${config.prefix}botinfo`, 'Sends information about this bot.')
    .addField(`${config.prefix}bounty`, 'Sends a reminder to do the daily bounty quest.')
    .addField(`${config.prefix}bugs`, 'Sends a list of all the catchable bugs on GraalClassic.')
    .addField(`${config.prefix}help`, 'Sends this message.')
    .addField(`${config.prefix}maps`, 'Sends a link for GraalMaps.')
    .addField(`${config.prefix}ping`, 'Gets the bot\'s ping.')
    .addField(`${config.prefix}shields`, 'Sends a link for Taylor Richaards shields.')
    .addField(`${config.prefix}swords`, 'Sends a link for Taylor Richaards swords.')
    .addField(`${config.prefix}spoils`, 'Sends a reminder for the Giant Blob Boss.')
    .addField(`${config.prefix}uptime`, 'Shows how long the bot has been running for.')

    message.author.send(helpEmbed);
};

module.exports.help = {
    name: 'help',
    aliases: ['']
};