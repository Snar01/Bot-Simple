const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete();

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply({
            embed: {
                titile: "Erro",
                description: "Você não possui a permissão `Banir Membros`",
                color: "#F00000"
            }
        });
    };

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.reply({
            embed: {
            titile: "Erro",
            description: "Você não possui a permissão `Banir Membros`",
            color: "#F00000"
        }
     });
    };
     
    let membro = message.mentions.users.first() || client.users.cache.get(args[0]);

    if(!membro) {
        return message.reply({
            embed: {
                titile: "Erro",
                description: "Você não mencionou um usuário Válido ou existente",
                color: "#F00000"
            }
        });
    }

    let r = args.slice(1).join(" ");
    if(!r) {
        return message.reply({
            embed: {
                titile: "Erro",
                description: "Você não disse a razão",
                color: "#F00000"
            }
        });
    }
     
    message.guild.members.ban(membro.id)

    let embed = new Discord.MessageEmbed()
    .setTitle("Banido")
    .setColor("#F00000")
    .setDescription(`Banido,
    
    Pessoa banida: ${membro}
    Quem banio: ${message.author}
    Motivo: ${r}`)
    .setFooter("Todos os direitos reservados")
    .setThumbnail(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    await message.channel.send(embed)
};

exports.help = {
    name: "ban",
    analise: ["banir"]
}