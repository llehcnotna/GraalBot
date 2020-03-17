const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (client, message, args) => {

    // >bandit

    let guildMember = message.member;

    let banditTimeout = 28800000;
    let banditTime = db.fetch(`cooldown_${message.author.id}`);

    const banditEmote = client.emojis.find(e => e.name === 'bandit');

    // Error Embed (active reminder)
    const banditError = new Discord.RichEmbed()
    .setColor('#b70000')
    .setDescription(`You already have an active reminder for `Bandit`.\nCome back in ${moment.duration(banditTimeout - Date.now() - banditTime)).format('h [hrs] m [mins] s [seconds]')}.`);

    // Initial reminder Embed.
    const banditEmbed = new Discord.RichEmbed()
    .setColor('#2F2B33')
    .setDescription(`${banditEmote} I'll remind you that in \`8 hours\`.`);

    // DM reminder Embed.
    const banditReminder = new Discord.RichEmbed()
    .setColor('#2F2B33')
    .setDescription('You can now steal from the \`bandits caves\` again!')
    .setFooter(`Bandit Reminder`);

    if(banditTime !== null && banditTimeout - (Date.now() - banditTime) > 0) {
        return message.channel.send(banditError);
    } else {
        db.set(`cooldown_${message.author.id}`, Date.now())
        message.channel.send(banditEmbed)
    }
    setTimeout(function() {
        message.author.send(banditReminder)
    }, banditTimeout);
};

module.exports.help = {
    name: 'bandit',
    aliases: ['caves']
};
