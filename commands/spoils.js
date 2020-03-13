const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >spoils

    return message.channel.send('This command is not active.');
    
    let guildMember = message.member;
    const spoilsRole = message.guild.roles.find(r => r.name === 'Spoils');
    const spoilsEmote = client.emojis.find(e => e.name === 'spoils');

    if(!spoilsRole) return message.reply('I couldn\'t find a role called \`Spoils\`, please create one or ask a server administrator.');

    // Error Embed (active reminder)
    const spoilsError = new Discord.RichEmbed()
    .setColor('#b70000')
    .setDescription('You already have an active reminder for `Spoils`.');

    // Initial reminder Embed.
    const spoilsEmbed = new Discord.RichEmbed()
    .setColor('#C9B427')
    .setDescription(`${spoilsEmote} I'll remind you that in \`12 hours\`.`);

    // DM reminder Embed.
    const spoilsReminder = new Discord.RichEmbed()
    .setColor('#C9B427')
    .setDescription('You can now collect spoils from the \`giant blob\` again.')
    .setFooter('Spoils Reminder');

    // If member has 'Spoils' role, don't send another reminder.
    if(message.member.roles.some(r => r.name === 'Spoils'))
    return message.channel.send(spoilsError);
    
    // If member does not have 'Bounty' role, add role and send prompt message.
    await guildMember.addRole(spoilsRole.id);
    message.channel.send(spoilsEmbed);

    // DMed reminder.
    try {
        setTimeout(function() {
            message.author.send(spoilsReminder);
            message.member.removeRole(spoilsRole.id);
                console.log(`[ LOG ] I have sent a spoils reminder to ${message.author.username}`);
        }, ms('12h'));
    }
    catch(error) {
        console.log(error);
    };
};

module.exports.help = {
    name: 'spoils',
    aliases: ['']
};
