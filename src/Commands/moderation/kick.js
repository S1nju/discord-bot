const {Clientm,Interaction, PermissionFlagsBits, ApplicationCommandOptionType, MessageFlags } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
   // devOnly:Boolean,
   // testOnly:Boolean
      options:[
       {
           name: 'target',
           description: 'The user to kick',
           type: ApplicationCommandOptionType.User,
           required: true
       },
       {
           name: 'reason',
           description: 'The reason for the kick',
           type: ApplicationCommandOptionType.String,
           required: true
           
       }
      ],
    permissionsRequired:[PermissionFlagsBits.KickMembers],
    botPermission:[PermissionFlagsBits.KickMembers],
     /**
      * 
      * @param {Client} client 
      * @param {Interaction} interaction 
      */
     callBack:async (client,interaction)=>{
          const targetUser = interaction.options.getUser('target');
          const reason = interaction.options.getString('reason');
          await interaction.deferReply();
          const user = await interaction.guild.members.fetch(targetUser.id).catch(err => {
              console.error(err);
              return null;
          });
          if (!user) {
              return interaction.followUp({ content: 'Mal9itahch', flags: MessageFlags.Ephemeral });
          }
          if( user.id === interaction.user.id) {
              return interaction.followUp({ content: 'mat9adch tbani ro7k ', flags: MessageFlags.Ephemeral });
          }
          if( user.id === interaction.guild.ownerId) {
              return interaction.followUp({ content: 'mat9adch tbani chikourek', flags: MessageFlags.Ephemeral });
          }
          if( user.id === client.user.id) {
              return interaction.followUp({ content: 'mat9adch tbani l bot', flags: MessageFlags.Ephemeral });
          }
          const targetuserRolePosition = user.roles.highest.position;
          const botRolePosition = interaction.guild.members.me.roles.highest.position;
          if (botRolePosition <= targetuserRolePosition) {
              return interaction.followUp({ content: 'hada mahboul 3liya', flags: MessageFlags.Ephemeral });
          }
          if (targetuserRolePosition >= interaction.member.roles.highest.position) {
              return interaction.followUp({ content: 'hada mahboul 3liya', flags: MessageFlags.Ephemeral });
          }
          interaction.guild.members.kick(user.id, { reason })
              .then(async () => {
                  await interaction.followUp(`**aya bara 3lina **: <@${user.id}>  hada kan  **reason: ${reason}**`);
              })
              .catch(async err => {
                  console.error(err);
                  await interaction.followUp({ content: 'An error occurred while trying to kick the user.', flags: MessageFlags.Ephemeral });
              });
      }
};