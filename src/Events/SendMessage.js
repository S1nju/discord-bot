const { Events, PermissionFlagsBits } = require('discord.js');
const { ActivityType } = require("discord.js");
const {messages,content}=require('../../config.json');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    execute(message) {
            if(message.author.bot) return;
            if(!message.guild) return message.reply('This command can only be used in a server.');
        if(content.includes(message.content.toLowerCase())) {
        message.reply(`${messages[Math.floor(Math.random() * messages.length)]}`);

    }
         if(message.content.toLowerCase()=='diroulna mep') {
        message.reply(`dok ndirholek`);

    }


    },
};