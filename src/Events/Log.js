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
                          channel.send('@everyone https://cdn.discordapp.com/attachments/1010276591303139530/1408891710485954681/Recording_9.m4a?ex=68ac0ce7&is=68aabb67&hm=f86a0617f263fbe4b93f63cf6224f3892e49630e2a97a549e3dc2d7e070dfe4e&');
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
