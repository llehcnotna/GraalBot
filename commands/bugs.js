const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >bugs <bug>

// Agrias Butterfly //
    if(args[0] === 'agrias') {
        let agriasEmbed = new Discord.RichEmbed()
        .setColor('#B93940')
        .setAuthor('Agrias Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/5559999_orig.png')
        .setDescription('Obtainability: **Super Rare**')

        .addField('Habitat', 'Tropical/Woodlands').addField('Location', 'Butterfly shop, Oasis')
        .addField('Selling Price', '71 Gralats')
        
        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(agriasEmbed);
        return;
    };

//////////////////////

// Arizona Sister Butterfly //
    if(args[0] === 'arizona') {
        let arizonaEmbed = new Discord.RichEmbed()
        .setColor('#49656F')
        .setAuthor('Arizona Sister Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/3353883.png')
        .setDescription('Obtainability: **Rare**')

        .addField('Habitat', 'Trees').addField('Location', 'Destiny')
        .addField('Selling Price', '???')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(arizonaEmbed);
        return;
    };

//////////////////////////////

// Spring Azure Butterfly //
    if(args[0] === 'azure') {
        let azureEmbed = new Discord.RichEmbed()
        .setColor('#B4A6DF')
        .setAuthor('Spring Azure Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/2168595.png')
        .setDescription('Obtainability: **Rare**')

        .addField('Habitat', 'Trees').addField('Location', 'Destiny')
        .addField('Selling Price', '???')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(azureEmbed);
        return;       
    };
////////////////////////////

// Black Beetle //
    if(args[0] === 'blackbeetle') {
        let blackbeetlEmbed = new Discord.RichEmbed()
        .setColor('#354F56')
        .setAuthor('Black Beetle')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/1890233_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Dark Places').addField('Location', 'Railcaves')
        .addField('Selling Price', '55 Gralats')
        
        .setFooter(`Ground Class • Beetle`)

        message.channel.send(blackbeetlEmbed);
        return;
    };
//////////////////

// Black Ladybug //
    if(args[0] === 'blackladybug') {
        let blackladybugEmbed = new Discord.RichEmbed()
        .setColor('#506B72')
        .setAuthor('Black Ladybug')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/9042945_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Around Flowers').addField('Location', 'Anywhere')
        .addField('Selling Price', '73 Gratals')

        .setFooter('Ground Class • Beetle')

        message.channel.send(blackladybugEmbed);
        return;
    };
///////////////////

// Blue Morpho Butterfly //
    if(args[0] === 'bluemorpho') {
        let bluemorphoEmbed = new Discord.RichEmbed()
        .setColor('#3D7FC9')
        .setAuthor('Blue Morpho Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/4473820_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Tropical/Woodlands').addField('Location', 'Oasis, Butterfly Shop, Onnet Forest')
        .addField('Selling Price', '51 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(bluemorphoEmbed);
        return;

    };
///////////////////////////

// bumblebee //
    if(args[0] === 'bumblebee') {
        let bumblebeeEmbed = new Discord.RichEmbed()
        .setColor('#DBC16D')
        .setAuthor('Bumblebee')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/492009_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Grasslands').addField('Location', 'Anywhere *(Bushes/Grass)*')
        .addField('Selling Price', '87 Gralats')

        .setFooter('Flying Class • Bumblebee')

        message.channel.send(bumblebeeEmbed);
        return;
    };
///////////////

// Clouded Yellow Butterfly //
    if(args[0] === 'clouded') {
        let cloudedyellowEmbed = new Discord.RichEmbed()
        .setColor('#E9E34F')
        .setAuthor('Clouded Yellow Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/8592203_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Coastal/Grassy').addField('Location', 'Graal City, MoD, York Town and Belle Island')
        .addField('Selling Price', '53 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(cloudedyellowEmbed);
        return;
    };

//////////////////////////////

// Cockroach //
    if(args[0] === 'cockroach') {
        let cockroachEmbed = new Discord.RichEmbed()
        .setColor('#4C5553')
        .setAuthor('Cockroach')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7487422.png')
        .setDescription('Obtainability: **Very Common**')

        .addField('Habitat', 'Dark Places').addField('Location', 'Railcaves, Bathrooms')
        .addField('Selling Price', '5 Gralats')

        .setFooter('Ground Class • Cockroach')

        message.channel.send(cockroachEmbed);
        return;
    };

///////////////

// Dragonfly //
    if(args[0] === 'dragonfly') {
        let dragonflyEmbed = new Discord.RichEmbed()
        .setColor('#407E5F')
        .setAuthor('Dragonfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/3278025_orig.png')
        .setDescription('Obtainability: **Very Common**')

        .addField('Habitat', 'Marshy/Grasslands').addField('Location', 'Swamp Town')
        .addField('Selling Price', '8 Gralats')

        .setFooter('Flying Class • Dragonfly')

        message.channel.send(dragonflyEmbed);
        return;
    };

///////////////

// Emperor Butterfly //
    if(args[0] === 'emperor') {
        let emperorEmbed = new Discord.RichEmbed()
        .setColor('#803999')
        .setAuthor('Emperor Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7371977_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Grasslands').addField('Location', 'Master Li\'s Forest, Onnet Forest')
        .addField('Selling Price', '20 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(emperorEmbed);
        return;
    };

///////////////////////

// Firefly //
    if(args[0] === 'firefly') {
        let fireflyEmbed = new Discord.RichEmbed()
        .setColor('#94AC47')
        .setAuthor('Firefly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/9469194_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Dark Areas/Woodlands').addField('Location', 'Onnet Forest, Deadwood')
        .addField('Selling Price', '34 Gralats')

        .setFooter('Flying Class • Firefly')

        message.channel.send(fireflyEmbed);
        return;  
    };

/////////////

// Grasshopper //
    if(args[0] === 'grasshopper') {
        let grasshopperEmbed = new Discord.RichEmbed()
        .setColor('#4E8366')
        .setAuthor('Grasshopper')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7956702_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Grassy Areas').addField('Location', 'Anywhere on the overworld')
        .addField('Selling Price', '20 Gralats')

        .setFooter('Ground Class • Grasshopper')

        message.channel.send(grasshopperEmbed);
        return;
    };

/////////////////

// Green Hairstreak Butterfly //
    if(args[0] === 'hairstreak') {
        let hairstreakEmbed = new Discord.RichEmbed()
        .setColor('#3BC76D')
        .setAuthor('Green Hairstreak Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/6390511_orig.png')
        .setDescription('Obtainability: **Rare**')

        .addField('Habitat', 'Hillsides/Rail Tracks').addField('Location', 'Swamptown, MoD Town')
        .addField('Selling Price', '84 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(hairstreakEmbed);
        return;
    };

////////////////////////////////

// Ladybug //
    if(args[0] === 'ladybug') {
        let ladybugEmbed = new Discord.RichEmbed()
        .setColor('#DC606C')
        .setAuthor('Ladybug')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7762566_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Around Flowers').addField('Location', 'Anywhere')
        .addField('Selling Price', '37 gralats')

        .setFooter('Ground Class • Beetle')

        message.channel.send(ladybugEmbed);
        return;        
    };

/////////////

// Large White Butterfly //
    if(args[0] === 'whitebutterfly') {
        let whitebutterflyEmbed = new Discord.RichEmbed()
        .setColor('#B9BAC1')
        .setAuthor('Large White Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/8879905_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Grasslands').addField('Location', 'Oasis, Graal City, MoD Town, Onnet Town')
        .addField('Selling Price', '34')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(whitebutterflyEmbed);
        return; 
    };

///////////////////////////

// Mantis //
    if(args[0] === 'mantis') {
        let mantisEmbed = new Discord.RichEmbed()
        .setColor('#5BA67C')
        .setAuthor('Mantis')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/6815646_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Bushes').addField('Location', 'Anywhere *(On Bushes)*')
        .addField('Selling Price', '52 Gralats')

        .setFooter('Ground Class • Mantis')

        message.channel.send(mantisEmbed);
        return;        
    };

////////////

// Fatal Metal Butterfly //
    if(args[0] === 'metal') {
        let metalEmbed = new Discord.RichEmbed()
        .setColor('#D78D64')
        .setAuthor('Fatal Metal Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/5493378.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Trees').addField('Location', 'Destiny')
        .addField('Selling Price', '???')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(metalEmbed);
        return;
    };

///////////////////////////

// Monarch Butterfly //
    if(args[0] === 'monarch') {
        let monarchEmbed = new Discord.RichEmbed()
        .setColor('#D46B54')
        .setAuthor('Monarch Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7715614_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Woodlands').addField('Location', 'Graal City, Master Li\'s Forest')
        .addField('Selling Price', '34 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(monarchEmbed);
        return;    
    };

///////////////////////

// Peacock Butterfly //
    if(args[0] === 'peacock') {
        let peacockEmbed = new Discord.RichEmbed()
        .setColor('#E9764F')
        .setAuthor('Peacock Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/8186058_orig.png')
        .setDescription('Obtainability: **Rare**')

        .addField('Habitat', 'Woodlands').addField('Location', 'Graal City, Master Li\'s Forest')
        .addField('Selling Price', '70 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(peacockEmbed);
        return;
    };

///////////////////////

// Pillbug //
    if(args[0] === 'pillbug') {
        let pillbugEmbed = new Discord.RichEmbed()
        .setColor('#416172')
        .setAuthor('Pillbug')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/7958166_orig.png')
        .setDescription('Obtainability: **Very Rare**')

        .addField('Habitat', 'Anywhere').addField('Location', '*"I didn’t know they were so rare to find!"*')
        .addField('Selling Price', '86 Gralats')

        .setFooter('Ground Class • Pillbug')

        message.channel.send(pillbugEmbed);
        return;        
    };

/////////////

// Ringlet Butterfly //
    if(args[0] === 'ringlet') {
        let ringletEmbed = new Discord.RichEmbed()
        .setColor('#8A6B62')
        .setAuthor('Ringlet Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/2059375_orig.png')
        .setDescription('Obtainability: **Common**')

        .addField('Habitat', 'Woodlands/Riverbanks').addField('Location', 'MoD cliffs, Onnet Forest')
        .addField('Selling Price', '34 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(ringletEmbed);
        return;
    };

///////////////////////

// Small Blue Butterfly //
    if(args[0] === 'bluebutterfly') {
        let bluebutterflyEmbed = new Discord.RichEmbed()
        .setColor('#4C78C4')
        .setAuthor('Small Blue Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/5983682_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Grassy/Rail Tracks').addField('Location', 'MoD, Master Li\'s Forest')
        .addField('Selling Price', '34 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(bluebutterflyEmbed);
        return;        
    };

//////////////////////////

// Spider //
    if(args[0] === 'spider') {
        let spiderEmbed = new Discord.RichEmbed()
        .setColor('#595A50')
        .setAuthor('Spider')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/114925_orig.png')
        .setDescription('Obtainability: **Rare**\n*(Only available in the fall)*')

        .addField('Habitat', 'Trees').addField('Location', 'Between two Trees')
        .addField('Selling Price', '70 Gralats')

        .setFooter('Ground Class • Spider')

        message.channel.send(spiderEmbed);
        return;        
    };

////////////

// Swallowtail Butterfly //
    if(args[0] === 'swallowtail') {
        let swallowtailEmbed = new Discord.RichEmbed()
        .setColor('#C9D158')
        .setAuthor('Swallowtail Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/8902492_orig.png')
        .setDescription('Obtainability: **Uncommon**')

        .addField('Habitat', 'Wetlands').addField('Location', '*(Above Water)*, Swamptown')
        .addField('Selling Price', '40 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(swallowtailEmbed);
        return;        
    };

///////////////////////////

// Tiger Butterfly //
    if(args[0] === 'tiger') {
        let tigerEmbed = new Discord.RichEmbed()
        .setColor('#445C6A')
        .setAuthor('Tiger Butterfly')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/3541106_orig.png')
        .setDescription('Obtainability: **Rare**')

        .addField('Habitat', 'Woodlands').addField('Location', 'Onnet Forest, Master Li\'s Forest, Mod Town, Butterfly shop')
        .addField('Selling Price', '69 Gralats')

        .setFooter('Butterfly Class • Butterfly')

        message.channel.send(tigerEmbed);
        return;
    };

/////////////////////

// Worm //
    if(args[0] === 'worm') {
        let wormEmbed = new Discord.RichEmbed()
        .setColor('#DC918F')
        .setAuthor('Worm')
        .setImage('https://graalclassicquests.weebly.com/uploads/2/9/9/5/29958177/5072111_orig.png')
        .setDescription('Obtainability: **Very Common**')

        .addField('Habitat', 'Underground').addField('Location', 'Anywhere *(Dig them up)*')
        .addField('Selling Price', '1 Gralat')

        .setFooter('Ground Class • Worm')

        message.channel.send(wormEmbed);
        return;
    };
//////////

// Main Bug Embed //
    let mainEmbed = new Discord.RichEmbed()
    .setTitle('Bugs')
    .setDescription('Use `g>bugs <name>` to get more information on the bugs on this list.')
    .addField('Butterfly Class', `agrias\narizona\nazure\nbluemorpho\nclouded\nemperor\nhairstreak\nwhitebutterfly\nmetal\nmonarch\npeacock\nringlet\nbluebutterfly\nswallowtail\ntiger`, true) // Butterfly Class
    .addField('Ground Class', 'blackbeetle\nblackladybug\ncockroach\ngrasshopper\nladybug\nmantis\npillbug\nspider\nworm', true) // Ground Class
    .addField('Flying Class', 'bumblebee\ndragonfly\nfirefly', true) // Flying Class

    .setFooter('GraalOnline Classic Bug Types')

    message.channel.send(mainEmbed);
    return;
   
};

////////////////////
module.exports.help = {
    name: 'bugs',
    aliases: ['bug', 'b']
};