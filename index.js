const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`${client.user.username} logado em: \n${client.guilds.cache.size} servidores; \n${client.users.cache.size} usuários!`)
    client.user.setActivity(`Coloca aqui os status`);
});

//Handler do bot
client.commands = new Discord.Collection();
client.aliases = new Map();
client.queue = new Map()

const fs = require("fs");
client.config = {
    prefix: config.prefix
};

/*em base neste handler depois do código acabar tens de fazer: exports.help = {
    name: "Nome do arquivo",
    analise: ["NOME"] //A analise podes tirar, não é obrigatório mas o name é! se tirares o analise tens de tirar a virgula depois do name!
}*/

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = props.help.name;
      console.log(`Comando ${ commandName } carregado`);
      client.commands.set(commandName, props);
      for (let i in props.help.analise) {
        client.aliases.set(props.help.analise[i], commandName)
    }
  });
});

client.on("message", async message => {
    if (message.author.bot) return;
  if (message.channel.type == 'dm') return;

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);

  if (!cmd) {
    if (!client.aliases.get(command)) return
    else cmd = client.commands.get(client.aliases.get(command));
  }
  cmd.run(client, message, args);
});

client.login(config.token);