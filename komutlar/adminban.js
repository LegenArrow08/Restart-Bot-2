const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Admin Vurdu Ve Gol Oldu!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-1.discordapp.net/external/171uiKxRgITAipvhLwQWRN0gDHVsry0MC9oYnff9Vnw/http/i.imgur.com/O3DHIA5.gif`)
    .setFooter("Restart Bot - Eğlence Sistemi", "https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot")
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'adminban',
  description: 'Admin ban efekti atar.',
  usage: '.adminban'
};
