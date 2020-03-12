const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //>goc

    let gocMember = message.guild.member(message.author);
    let gocRole = message.guild.roles.find(`name`, "GraalClassic");
    if(!gocRole) return message.reply("I couldn't find that role.");

    message.delete();

    if(!gocMember.roles.has(gocRole.id)) {
        await(gocMember.addRole(gocRole.id));
    
        return message.channel.send(`**${message.author.username}**, you will now receive updates for **${gocRole.name}**!`);
    }
    else {
        await(gocMember.removeRole(gocRole.id));
    
        return message.channel.send(`**${message.author.username}**, you will no longer receive updates for **${gocRole.name}**!`);
    }
}
    

  module.exports.help = {
    name: "goc",
    aliases: ['']
  }
