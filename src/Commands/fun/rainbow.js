const canvacord = require('canvacord');
const { AttachmentBuilder } = require("discord.js");
module.exports = {
    name: 'rainbow',
    description: 'Make someone beautiful!',
   // devOnly:Boolean,
   // testOnly:Boolean
   options:[
    {
        name: 'user',
        description: 'The user to rainbow',
        type: 6, // USER type
        required: false
    }
   ],
   //deleted:Boolean
   callBack:async (client,interaction)=>{
    
    if(interaction.options.getUser('user')) {
        const user = interaction.options.getUser('user');
        

        const userAvatar = user.displayAvatarURL({dynamic: false, format:"png"});
        const triggerImage = await canvacord.Canvas.rainbow(userAvatar);
        const attachment = new AttachmentBuilder(triggerImage, { name: "triggered.gif" });

        await interaction.reply({ files: [attachment]});
        return;
    }
           await interaction.deferReply();
        const userAvatar = interaction.user.displayAvatarURL({dynamic: false, format:"png"});
        const triggerImage = await canvacord.Canvas.rainbow(userAvatar);
       const attachment = new AttachmentBuilder(triggerImage, { name: "triggered.gif" });

         await interaction.followUp({ files: [attachment]});

    
 
}}