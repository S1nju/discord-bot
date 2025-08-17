const canvacord = require('canvacord');
const { AttachmentBuilder } = require("discord.js");
module.exports = {
    name: 'fuse',
    description: 'Fuse two images together!',
   // devOnly:Boolean,
   // testOnly:Boolean
   options:[
    {
        name: 'user',
        description: 'The user to fuse with',
        type: 6, // USER type
        required: true
    }
   ],
   //deleted:Boolean
   callBack:async (client,interaction)=>{

           await interaction.deferReply();
        const userAvatar = interaction.user.displayAvatarURL({dynamic: false, format:"png"});
        const triggerImage = await canvacord.Canvas.fuse(userAvatar, interaction.options.getUser('user').displayAvatarURL({dynamic: false, format:"png"}));
       const attachment = new AttachmentBuilder(triggerImage, { name: "triggered.gif" });

         await interaction.followUp({ files: [attachment]});

    
 
}}