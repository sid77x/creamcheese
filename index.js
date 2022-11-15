 const Discord = require ("discord.js")
    require("dotenv").config()
    
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
    })
    const welcomeChannelId = "1035202801351008279"

    client.on("guildMemberAdd", (member) => {
        
       const channel = member.guild.channels.cache.get(welcomeChannelId)
       channel.send(`<@${member.id}> welcome to the server`)
    })
    client.login(process.env.TOKEN)

    
