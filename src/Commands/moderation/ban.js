const {Client,Interaction,ApplicationCommandOptionType,PermissionFlagsBits, MessageFlags} = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
   // devOnly:Boolean,
   // testOnly:Boolean
   options:[
    {
        name: 'target',
        description: 'The user to ban',
        type: ApplicationCommandOptionType.Mentionable,
        required: true
    },
    {
        name: 'reason',
        description: 'The reason for the ban',
        type: ApplicationCommandOptionType.String,
        required: true
    }
   ],
   permissionsRequired:[PermissionFlagsBits.BanMembers],
   botPermission:[PermissionFlagsBits.BanMembers],
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
        interaction.guild.members.ban(user.id, { reason })
            .then(async () => {
                await interaction.followUp(`**aya bara 3lina **: <@${user.id}>  hada kan  ** ${reason}**`);
            })
            .catch(async err => {
                console.error(err);
                await interaction.followUp({ content: 'An error occurred while trying to ban the user.', flags: MessageFlags.Ephemeral });
            });
    }
 
};