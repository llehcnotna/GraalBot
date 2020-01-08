const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >loot <bug>

// Loot Location Embeds //

msg = message.content.toLowerCase();
// Taylor Richaards //
    if(args[0] === 'taylor') {
        let taylorEmbed = new Discord.RichEmbed()
        .setTitle('Taylor Richaards')
        .setDescription("Taylor Richaards' House is right under Graal City beside the adoption center.")

        .addField('Buys', 'Ruined Scarf **(9g)**\nOld Underwear **(7g)**')

        .setFooter('Loot Location • Taylor Richaards')

        message.channel.send(taylorEmbed);
        return;
    };

//////////////////////

// Rail Connector //
    if(args[0] === 'rail') {
        let railEmbed = new Discord.RichEmbed()
        .setTitle('Rail Connector')
        .setDescription('Go to the Railroad Station in Graal City. In the top left corner where you buy the Draisine, the NPC is behind the counter.')

        .addField('Buys', 'Draisine Wheel **(17g)**')

        .setFooter('Loot Location • Rail Connector')

        message.channel.send(railEmbed);
        return;
    };

////////////////////

// Rafael //
    if(args[0] === 'rafael') {
        let rafaelEmbed = new Discord.RichEmbed()
        .setTitle('Rafael')
        .setDescription('Rafael owns the Black Orchid, the pub in the northwest of MoD Town.')

        .addField('Buys', 'Shiny Mug **(12g)**\nDirty Mug **(5g)**')

        .setFooter('Loot Location • Rafael')

        message.channel.send(rafaelEmbed);
        return;
};

////////////

// Blacksmith //
    if(args[0] === 'blacksmith') {
        let blacksmithEmbed = new Discord.RichEmbed()
        .setTitle('Blacksmith')
        .setDescription('The Snow Town Blacksmith, not the Onnet Town one. His place is in the northwest corner of Snow Town.')

        .addField('Buys', 'Chainless Flail **(75g)**\nBroken Sword **(18g)**\nCracked Shield **(18g)**\nDefused Bomb **(7g)**\nDull Arrow **(7g)**')

        .setFooter('Loot Location • Blacksmith')

        message.channel.send(blacksmithEmbed);
        return;
    };

////////////////

// Lantern Seller //
if(args[0] === 'lantern') {
    let lanternEmbed = new Discord.RichEmbed()
    .setTitle('Lantern Seller')
    .setDescription('Her Lantern Stall is in the cliffs area between Onnet and Snow Town. Go through the cave next to the Onnet School. Go up the next cliff and into the next cave.')

    .addField('Buys', 'Old Lantern **(18g)**')

    .setFooter('Loot Location • Lantern Seller')

    message.channel.send(lanternEmbed);
    return;
};

////////////////////

// Earl, Stable Hand //
if(args[0] === 'earl') {
    let earlEmbed = new Discord.RichEmbed()
    .setTitle('Earl, Stable Hand')
    .setDescription('He is inside the Horse Stables in Master Li\'s Woods.')

    .addField('Buys', 'Old Horseshoe **(18g)**')

    .setFooter('Loot Location • Earl, Stable Hand')

    message.channel.send(earlEmbed);
    return;
};

///////////////////////

// OldMan //
if(args[0] === 'oldman') {
    let oldManEmbed = new Discord.RichEmbed()
    .setTitle('Old Man')
    .setDescription('This guy is in the secret furniture shop in the rail cave between Snow Town and York Town.')

    .addField('Buys', 'Odd Gem **(150g)**')

    .setFooter('Loot Location • Old Man')

    message.channel.send(oldManEmbed);
    return;
};  

////////////

// Jack //
if(args[0] === 'jack') {
    let jackEmbed = new Discord.RichEmbed()
    .setTitle('Jack (Pyrat)')
    .setDescription('He is positioned in the tent in York Town. It\'s on the island where the old pyrat daily quest was.')

    .addField('Buys', 'Gold Doubloon **(75g)**\nSilver Doubloon **(65g)**\nShip Helm **(20g)**\nHeavy Anchor **(20g)**')

    .setFooter('Loot Location • Jack')

    message.channel.send(jackEmbed);
    return;
};

//////////

// Floydian //
if(args[0] === 'floydian'){
    let floydianEmbed = new Discord.RichEmbed()
    .setTitle('Floydian')
    .setDescription('He\'s fishing in the cave to the far left of Swamp town, climb the vines to enter.')

    .addField('Buys', 'Fishing Lure **(45g)**\nFishing Hook **(18g)**')

    .setFooter('Loot Location • Floydain')

    message.channel.send(floydianEmbed);
    return;
};
//////////////

// Owl //
if(args[0] === 'owl') {
    let owlEmbed = new Discord.RichEmbed()
    .setTitle('Owls\' Nest Leader')
    .setDescription('Owls Nest under Destiny Tower, for Instructions use `g>quests` to get quest tutorials.')

    .addField('Buys', 'Water Amulet **(150g)**\nGold Pearl **(150g)**\nMagic Crystal **(150g)**\nOrnate Ring **(75g)**\nGold Necklace **(75g)**\nGold Nugget **(75g)**')

    .setFooter('Loot Location • Owl')

    message.channel.send(owlEmbed);
    return;
};

//////////////////////////

// Hazel //
if(args[0] === 'hazel') {
    let hazelEmbed = new Discord.RichEmbed()
    .setTitle('Hazel')
    .setDescription('Shes in the Blooming Botany shop in Swamp Town.')

    .addField('Buys', 'Kelp **(8g)**')

    .setFooter('Loot Location • Hazel')

    message.channel.send(hazelEmbed);
    return;
};

///////////

// Joshua //
if(args[0] === 'joshua') {
    let joshuaEmbed = new Discord.RichEmbed()
    .setTitle('Joshua the Baby')
    .setDescription('He is on the southeast beach of Oasis Island. This island is only accessible to VIP subscribers.')

    .addField('Buys', 'Small Scallop **(10g)**\nCone Shell **(10g)**\nHuge Conch Shell **(15g)**\nConch Shell **(10g)**\nStar Fish **(10g)**\nSand-Dollar **(15g)**')

    .setFooter('Loot Location • Joshua the Baby')

    message.channel.send(joshuaEmbed);
    return;
};

////////////

// Elster the Hoarder //
if(args[0] === 'elster') {
    let elsterEmbed = new Discord.RichEmbed()
    .setTitle('Elster the Hoarder')
    .setDescription('Elster\'s Cave is just to the left of Sardon\'s Tower.')

    .addField('Buys', 'Wand of Elements **(100g)**\nDagger of Famine **(100g)**\nTarnished Crystal **(50g)**\nImperfect Pearl **(7g)**\nWhite Pearl **(12g)**\nBlack Pearl **(50g)**\nWeird Brick **(50g)**\nGreen Graal **(30g)**\nRed Graal **(30g)**\nYellow Graal **(30g)**\nBlue Graal **(30g)**\nMoon Rock **(75g)**\nZorbi Helmet **(100g)**\nNarwal Horn **(?)**\nShark Tooth **(8g)**\nSkull **(12g)**\nDisabled Nuke **(45g)**', true).addField('Buys', 'Dead Coral **(7g)**\nCrab Shell **(8g)**\nBroken Bottle **(5g)**\nVase **(5g)**\nTurtle Shell **(13g)**\nGemless Rind **(15g)**\nEmpty Jar **(10g)**\nEmpty Bottle **(10g)**\nTin Can **(5g)**\nFlat Soccer Ball **(7g)**\nSad Sign **(5g)**\nOld Boot **(5g)**\nRock **(5g)**\nSea Sponge **(12g)**\nFish Bones **(5g)**\nRotten Easter Egg **(5g)**\nBroken Goggles **(12g)**', true)

    .setFooter('Loot Location • Elster the Hoarder')

    message.channel.send(elsterEmbed);
    return;
};

////////////////////////

// Loot List //
    if(args[0] === 'list') {
        let lootList = new Discord.RichEmbed()
        .setTitle('Loot Items')
        .setDescription('**In Progress**')

        .setFooter('GraalOnline Classic Loot List')

        message.channel.send(lootList);
        return;
    };

///////////////

// Loot Location //
    if(args[0] === 'location') {
        let lootLocation = new Discord.RichEmbed()
        .setTitle('Loot Locations')
        .setDescription('Specific selling locations for special loot.\nUse `g>loot <location name>` for the list of sellable loot.')

        .addField('Locations', "Taylor\nRail\nRafael\nBlacksmith\nLantern\nEarl\nOldMan\njack\nFloydian\nOwl\nHazel\nJoshua\nElster")

        .setFooter('GraalOnline Classic Loot Locations')

        message.channel.send(lootLocation);
        return;
    };

///////////////////

// Main Loot Embed //
    let LootMenu = new Discord.RichEmbed()
    .setTitle('Loot Menu')
    .setDescription('commands')

    .addField('Loot List', 'Use `g>loot list` to see the entire list of loot.')
    .addField('Loot Location', 'Use `g>loot location` to get specific selling locations.')

    .setFooter('GraalOnline Classic Loot Menu (Made with the help of: graalclassicquests.weebly.com)')

    message.channel.send(LootMenu);
    return;
};

/////////////////////
module.exports.help = {
    name: "loot",
    aliases:['']
};