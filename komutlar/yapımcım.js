const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** <@462635554434187265>")
  .setFooter('Restart Bot | Beta', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot)` + "**\n**"+`[DBL Oyver](Henüz Yok)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/qwkHqMj)`, false)
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'yapımcı'
};
