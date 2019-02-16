const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {
  
          message.channel.send('I\'ll send you a test!');
  
        setTimeout(function() {
          message.author.send('test test 123');
        }, ms('2m'));
        console.log(`[ LOG ] I have sent a reminder to ${message.author}`);
};

module.exports.help = {
    name: 'test'
};
