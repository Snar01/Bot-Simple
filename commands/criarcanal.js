const config = require("../config.json");

module.exports.run = async (client, message, args, level) => {
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.reply({
        embed: {
          title: "Error!",
          description: "Você não tem a permissão `Gerenciar Canais` para executar esse comando!",
          color: config.colors.red
        }
      });
    }
    if (!args[1]) return message.reply('Você precisa me dar o tipo de canal!')
    if (!args[0]) return message.reply('Você precisa me dar o nome do canal!')

    message.channel.send('Eu criei o canal!').then(() => {
      message.guild.channels.create(args[1], {type:args[0]}, []).catch((err) => {
        message.channel.send('Havia um erro!')
      })
    })
  } catch (err) {
    message.channel.send('Ocorreu um erro!' + err).catch()
  }
}

exports.help = {
  name: "criarcanal",
  description: "Crie um canal no servidor ",
  analise: ["criarcanal"]
}