/// Required Libraries ///
const config = require('./config.json');
const Discord = require('discord.js');
const ms = require('ms');
const fs = require('fs')

const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Command Handler Setup
fs.readdir('./commands', (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if (jsfile.length <= 0){
        return console.log(' [ LOG ] couldn\'t find commands!');
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[ LOG ] ${f} loaded!`);
        client.commands.set(props.help.name, props);
        // Aliases
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name)
        });
    });
});

//////////////////////////

// Client Event: On Ready //
client.on('ready', async () => {
    console.log(`\n[ LOG ] ${client.user.username} Launched... \n        discord.js ${Discord.version}`);
    client.user.setStatus('online'); // Change the status of the Bot Online, Idle, dnd, Invisible.
function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Javascript`, `g>help`, `Bush Race`, `Chance`,`Cliff Climber`, `Dodge`, `Hidden Paths`, `Ice Race`, `Snowball Fight`, `Sumo`, `Spider Pit`, `Snake Pit`, `Team Fort`  // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array

};

setInterval(setActivity, 1000 * 60 * 5) //sets and picks a new game every 5 minutes
});

////////////////////////////

// Console Chat //
let y = process.openStdin()
y.addListener('data', res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.get('562371367278870544').send(x.join(' '));
});

// Naris General Chat: 553008847543992361
//////////////////

// Perms Stuff

client.on('message', async message => {

    if(message.author.bot) return; // If the message author is a bot, return.
    if(message.channel.type === 'dm') return message.reply(`**${message.author.username}**, You can not use commands within direct messages.`); // If message sent within DM's, return.
    

    let prefix = config.prefix; // Let prefix = whatever the prefix is in the config file.
    if(!message.content.startsWith(prefix)) return // If message does NOT start with a prefix, return.
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
    if (commandfile) commandfile.run(client,message,args);

});

client.login(config.token);
