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

// Perms Stuff

client.on('message', async message => {

    if(message.author.bot) return; // If the message author is a bot, return.    

    let prefix = config.prefix; // Let prefix = whatever the prefix is in the config file.
    if(!message.content.startsWith(prefix)) return // If message does NOT start with a prefix, return.
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
    if (commandfile) commandfile.run(client,message,args);

});

// TEST //
var http = require('http'); //importing http

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'graalbot.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();
//////////

client.login(process.env.BOT_TOKEN);
