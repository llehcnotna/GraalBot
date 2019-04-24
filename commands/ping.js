const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >ping

    message.channel.send(`Pong! \`${message.createdTimestamp - Date.now()} ms\``).then(function (message) {
        message.react('🔔');
    });

};

module.exports.help = {
    name: 'ping',
    aliases: ['']
};