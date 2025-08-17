const { Events } = require('discord.js');
const { ActivityType } = require("discord.js");
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
            let status  = [
              'slm',
              '3achi9 Bojati',
              'zoubir',
              'oui',
              'ghadi nbanik'
            ]
            

          console.log(`${client.user.tag} is alive !!`);
            setInterval(() => {
                    client.guilds.cache.forEach(guild => {
                     if(guild.name ==='Nakhcha <3'){
                      guild.channels.fetch('1010276591303139530').then(channel => {
                        if(channel){
                          channel.send('@everyone fadi7at zoubir https://cdn.discordapp.com/attachments/1010276591303139530/1404576901191827536/image.png?ex=68a1a06d&is=68a04eed&hm=3b98a5946a062cc997ea2a6fb61ba3337518e6256a14c8036f6b55c1e5e092d8&');
                        }
                     });  
                     }
                    });
                  }, 1000*60*60*24);
                  
            setInterval(() => {
                    client.user.setActivity({name: status[Math.floor(Math.random() * status.length)] ,type: ActivityType.Competing});
                  }, 10000);
                
	},
};