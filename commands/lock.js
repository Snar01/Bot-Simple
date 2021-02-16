const { DiscordAPIError, MessageEmbed } = require("discord.js");
const config = require('../config.json')

//comando de lock
module.exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
  
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })

      let embed = new MessageEmbed()
      .setTitle('🔒')
      .setDescription(`🔒 ${message.author} viola canal fechado com sucesso!`)
      .setColor('BLUE')
        message.reply('🔒', embed);
};
  
exports.help = {
  name: "lock",
  description: "Bloqueie o canal atual",
  analise: ["bloquarcanal", "off"]
}