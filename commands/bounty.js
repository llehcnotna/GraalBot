const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >bounty

    return message.channel.send('This command is not active.');

    let guildMember = message.member;
    const bountyRole = message.guild.roles.find(r => r.name === 'Bounty');
    const bountyEmote = client.emojis.find(e => e.name === 'bountybox');

    // Error Embed (active reminder)
    const bountyError = new Discord.RichEmbed()
    .setColor('#b70000')
    .setDescription('You already have an active reminder for `Bounty`.');

    // Initial reminder Embed.
    const bountyEmbed = new Discord.RichEmbed()
    .setColor('#635231')
    .setDescription(`${bountyEmote} I'll remind you that in \`24 hours\`.`);

    // DM reminder Embed.
    const bountyReminder = new Discord.RichEmbed()
    .setColor('#635231')
    .setDescription('Your daily bounty is now avalible at the \`castle\`.')
    .setFooter('Bounty Reminder');

    // If member has 'Bounty' role, don't send another reminder.
    if(message.member.roles.some(r => r.name === 'Bounty'))
    return message.channel.send(bountyError);

    // If member does not have 'Bounty' role, add role and send prompt message.
    await guildMember.addRole(bountyRole.id);
    message.channel.send(bountyEmbed);

    // DMed reminder.
    try {
        setTimeout(function() {
            message.author.send(bountyReminder);
            message.member.removeRole(bountyRole.id);
                console.log(`[ LOG ] I have sent a bounty reminder to ${message.author.username}`);
        }, ms('24h'));
    }
    catch(error) {
        console.log(error);
    };
};

module.exports.help = {
    name: 'bounty',
    aliases: ['']
};