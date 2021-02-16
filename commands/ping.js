const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send('ping?');
  
    m.edit(`Pong!
Latência da API: **${client.ws.ping}** 
Latência do bot: **${m.createdTimestamp -message.createdTimestamp}**
Sastisfeito por saber o meu __ping?__`
    );
};

exports.help = {
    name: "ping",
    description: "Latência do bot",
    analise: ["latência"]
}