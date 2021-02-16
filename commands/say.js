const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      ":nao: Você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
    );
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};

exports.help = {
  name: "say",
  description: "Mande uma messagem como bot",
  analise: ["falar", "dizer"]
}