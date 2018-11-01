const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni Sunucuna Davet Etmek İçin Tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot Yapımıcısı:** <@462635554434187265>")
  .setFooter('Restart Bot | Beta', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[DBL Oyver](Henüz Yok)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/8yEdzy7)`, false)
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
  name: 'davet',
  description: 'davet.',
  usage: 'davet'
};
