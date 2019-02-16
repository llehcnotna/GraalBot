const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {
  
        setTimeout(function() {
          message.author.send('test test 123');
        }, ms('2m'));
};

module.exports.help = {
    name: 'test'
};
