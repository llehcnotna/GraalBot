const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >bounty

    const bountyEmote = client.emojis.find(e => e.name === 'bountybox');

    message.channel.send(`${bountyEmote} I'll remind you that in \`24 hours\`.`);

    const spoilsRemind = new Promise(function(resolve, reject) {
        setTimeout(function() {
          message.author.send('Your daily bounty is now available at the \`castle\`.');
        }, ms('24h'));
      });
      
      spoilsRemind.then(function(value) {

      });
};

module.exports.help = {
    name: 'bounty'
};