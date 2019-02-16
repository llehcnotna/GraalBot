const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >bounty

    const bountyEmote = client.emojis.find(e => e.name === 'bountybox');

    message.channel.send(`${bountyEmote} I'll remind you that in \`24 hours\`.`);

        setTimeout(function() {
          message.author.send('Your daily bounty is now available at the \`castle\`.');
            console.log(`[ LOG ] I have sent a reminder to ${message.author}`);
        }, ms('24h'));

};

module.exports.help = {
    name: 'bounty'
};
