const canvacord = require('canvacord');
const { AttachmentBuilder } = require("discord.js");
module.exports = {
    name: 'trigger',
    description: 'Trigger someone!',
   // devOnly:Boolean,
   // testOnly:Boolean
   options:[
    {
        name: 'user',
        description: 'The user to trigger',
        type: 6, // USER type
        required: false
    }
   ],
   //deleted:Boolean
   callBack:async (client,interaction)=>{
    
    if(interaction.options.getUser('user')) {
        const user = interaction.options.getUser('user');
        

        const userAvatar = user.displayAvatarURL({dynamic: false, format:"png"});
        const triggerImage = await canvacord.Canvas.trigger(userAvatar);
        const attachment = new AttachmentBuilder(triggerImage, { name: "triggered.gif" });

        await interaction.reply({ files: [attachment]});
        return;
    }
           await interaction.deferReply();
        const userAvatar = interaction.user.displayAvatarURL({dynamic: false, format:"png"});
        const triggerImage = await canvacord.Canvas.trigger(userAvatar);
       const attachment = new AttachmentBuilder(triggerImage, { name: "triggered.gif" });

         await interaction.followUp({ files: [attachment]});

    
 
}}