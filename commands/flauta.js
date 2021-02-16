const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({
    files: ['./videos/flauta.mp4']
 });
};

exports.help = {
  name: "flauta"
}