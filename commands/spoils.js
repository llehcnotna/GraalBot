const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    // >spoils

    const spoilsEmote = client.emojis.find(e => e.name === 'spoils');

    message.channel.send(`${spoilsEmote} I'll remind you that in \`12 hours\`.`);
try {
        setTimeout(function() {
          message.author.send('You can now collect spoils from the \`giant blob\` again.');
            console.log(`[ LOG ] I have sent a reminder to ${message.author}`);
        }, ms('12h'));
}
    catch(error) {
        console.log(error);
}
};

module.exports.help = {
    name: 'spoils'
};
