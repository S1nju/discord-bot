const chalk = require('chalk');

const { Client,Events,EmbedBuilder } = require('discord.js');
module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
      /**
      * 
      * @param {Client} client 
      * @param {Interaction} interaction 
      */
   async execute(client) {
    const welcomeChannelId = process.env.WELCOME_CHANNEL_ID;
    const welcomeChannel = await client.guild.channels.fetch(welcomeChannelId);

    if (!welcomeChannel) {
        console.error(`Welcome channel not found: ${welcomeChannelId}`);
        return;
    }

    console.log(chalk.green(`wee sv: ${client.user.discriminator} (${client.user.id})`));
    const welcomeEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('weee sv?')
        .setDescription(`weeee **${client.user.username}** , `)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp();

    await welcomeChannel.send({ embeds: [welcomeEmbed] });
    },
};