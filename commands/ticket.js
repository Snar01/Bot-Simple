const Discord = require('discord.js')
module.exports.run = (client,message,args) =>{
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send({
            embed: {
                titile: "Sucesso",
                description: "Criai um ticket para você agora não fale bobagem!",
                color: "GREEN"
            }
        });
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
const ebw = new Discord.MessageEmbed()
.setTitle(`${message.author} já criai um ticket para você!`)
message.channel.send({
    embed: {
        titile: "Error!",
        description: message.author + " Criai um ticket prara você por favor enquanto não fechar o seu ticket não pode criar outro",
        color: "#F00000"
    }
});

const ebww = new Discord.MessageEmbed()
.setTitle(`Atenção`)
.setDescription(`${message.author} o suporte vem o já atender, mas atenção caso fale bobagem pode ser mutado ou até ser banido do servidor`)
.setColor("BLUE")
chan.send(ebww).then((m)=>{ m.pin() })
})
}
}

exports.help = {
name : 'ticket',
description: "Crie um canal de suporte",
analise: ["suporte"]
}