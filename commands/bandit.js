const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >bandit

    return message.channel.send('This command is not active.');

    let guildMember = message.member;
    const banditRole = message.guild.roles.find(r => r.name === 'Bandit');
    const banditEmote = client.emojis.find(e => e.name === 'bandit');

    // Error Embed (active reminder)
    const banditError = new Discord.RichEmbed()
    .setColor('#b70000')
    .setDescription('You already have an active reminder for `Bandit`.');

    // Initial reminder Embed.
    const banditEmbed = new Discord.RichEmbed()
    .setColor('#2F2B33')
    .setDescription(`${banditEmote} I'll remind you that in \`8 hours\`.`);

    // DM reminder Embed.
    const banditReminder = new Discord.RichEmbed()
    .setColor('#2F2B33')
    .setDescription('You can now steal from the \`bandits caves\` again!')
    .setFooter(`Bandit Reminder`);

    // If member has 'Bandit' role, don't send another reminder.
    if(message.member.roles.some(r => r.name === 'Bandit'))
    return message.channel.send(banditError);

    // If member does not have 'bandit' role, add role and send prompt message.
    await guildMember.addRole(banditRole.id);
    message.channel.send(banditEmbed);

    // DMed reminder.
    try {
        setTimeout(function() {
            message.author.send(banditReminder);
            message.member.removeRole(banditRole.id);
                console.log(`[ LOG ] I have sent a bandit reminder to ${message.author.username}`);
        }, ms('8h'));
    }
    catch(error) {
        console.log(error);
    };
};

module.exports.help = {
    name: 'bandit',
    aliases: ['']
};