const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    // >info

    let bIcon = client.user.displayAvatarURL;

    let botEmbed = new Discord.RichEmbed()
    .setTitle('Bot Name: **GraalBot**')
    .setColor("")
    .setThumbnail(bIcon)

    .setDescription(`Playing: ${client.user.presence.game ? `**${client.user.presence.game.name}**` : "**Nothing.**"}`, true)

    .addField('Created On', `${moment.utc(client.user.createdAt).format("MMMM Do YYYY")}`, true)

    .setFooter(`| Created by: Default | Inspired by: FSY | Profile picture: Cricut |`);

    return message.channel.send(botEmbed); 
};

module.exports.help = {
    name: 'info'
};