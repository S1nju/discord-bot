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
            
  setInterval(() => {
                     console.log(`${client.user.tag} is still alive !!`);
                  }, 1000*60*60*24);
          console.log(`${client.user.tag} is alive !!`);
                  
            setInterval(() => {
                    client.user.setActivity({name: status[Math.floor(Math.random() * status.length)] ,type: ActivityType.Competing});
                  }, 10000);
                
	},
};
