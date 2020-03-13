const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    // >botinfo

    let bIcon = client.user.displayAvatarURL;

    let botEmbed = new Discord.RichEmbed()
    .setColor("")    
    .setTitle(`Client name: ${client.user.username}`)
    .setThumbnail(bIcon)

    .setDescription(`Playing: ${client.user.presence.game ? `**${client.user.presence.game.name}**` : "**Nothing.**"}`, true)

    .addField('Created On', `${moment.utc(client.user.createdAt).format("MMMM Do YYYY")}`, true).addField('Guilds', `${client.guilds.size}`, true)

    .setFooter(`| Created by: Default | Inspired by: FSY | Profile picture: Cricut |`);

    return message.channel.send(botEmbed); 
};

module.exports.help = {
    name: 'botinfo',
    aliases: ['bi', 'info']
};
