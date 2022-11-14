const Discord = require ("discord.js")
const TOKEN = "MTA0MTE5MTI5OTM1ODkyODk2Ng.GcPMRh.jyH9tqmIu_kXIzKjoyBcmc-uiexZ38IVcAJNMM"
const { MessageEmbed, Intents } = require(`discord.js`)

const client = new Discord.Client({
    intents:131071,
    partials:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING"
    ]
})

client.on("ready", () =>{
    console.log(`Logged In as ${client.user.tag}`)
    
})
client.on("messageCreate", (message) =>{
    if (message.content == "hello"){
        message.reply("Hello")
    }
    else if(message.content == "!shit")
    {
        message.reply("you are gay")
    }
const welcomeChannelId = "923999687999098983"
})
client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id} Welcome to the server`)
    
})
client.login(TOKEN)
