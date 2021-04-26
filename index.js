// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
//
//
//discord.gg/ebBY5CRMdG
//
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require('./config.json')
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

require("./functions")(client);

client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(config.prefix)||message.author.bot) return

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message);
    } else if(command === 'instagram'){
        client.commands.get('instagram').execute(message, client);
    } else if(command === 'wl'){
        client.commands.get('wl').execute(message, client);
    }else if(command === 'otomoto'){
        client.commands.get('otomoto').execute(message, client);
    }else if(command === 'pomoc'){
        client.commands.get('pomoc').execute(message, client);
    }else if(command === 'warn1'){
        client.commands.get('warn1').execute(message, client, args);
    }else if(command === 'warn2'){
        client.commands.get('warn2').execute(message, client, args);
    }else if(command === 'warn3'){
        client.commands.get('warn3').execute(message, client, args);
    }else if(command === 'usunwarn'){
        client.commands.get('usunwarn').execute(message, client,args);
    }
});

module.exports = {
    client: client
};

client.login(config.token);
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
//
//
//discord.gg/ebBY5CRMdG
//
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 