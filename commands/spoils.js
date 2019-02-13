const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >spoils

    const spoilsEmote = client.emojis.find(e => e.name === 'spoils');

    message.channel.send(`${spoilsEmote} I'll remind you that in \`12 hours\`.`);

    const spoilsRemind = new Promise(function(resolve, reject) {
        setTimeout(function() {
          message.author.send('You can now collect spoils from the \`giant blob\` again.');
        }, ms('12h'));
      });
      
      spoilsRemind.then(function(value) {

      });
};

module.exports.help = {
    name: 'spoils'
};