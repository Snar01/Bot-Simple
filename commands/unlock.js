const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
   message.channel.overwritePermissions([{id: message.guild.id, accept: ['SEND_MESSAGES'],}]); 
            
 let embed = new Discord.MessageEmbed()
 .setColor('#00FF00')
 .setTitle(`Chat desbloqueado para bloquear use: \`${config.prefix}lock\` `)
 .setFooter(`Comando Solicitado por: ${message.author.username}`)
 return message.reply(embed)
}

exports.help = {
   name: "unlock",
   description: "Retire o canal bloquado",
   analise: ["desbloquar", "on"]
}