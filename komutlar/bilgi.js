const Discord = require('discord.js');

exports.run = (client, message, params) => {
var embed = {
			color: 3447003,
			description: `**Bilgi**`,
			fields: [
				{
					name: '❯ Yapımcı',
					value: client.users.get('462635554434187265').tag,
					inline: false
				},
				{
					name: '❯ Sürüm',
					value: `Discord.JS:  v11.0.0
Bot:  v0.1.1`,
					inline: false
				},
				{
					name: '❯ Davet',
					value: `https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot`,
					inline: false
				},
				{
					name: '❯ Destek sunucusu',
					value: `https://discord.gg/qwkHqMj`,
					inline: false
				},
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "© Restart Bot | Beta"
			},
			thumbnail: { url: client.user.avatarURL }
    };
		return message.channel.send({embed})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot 	Hakkında Bilgi Verir.',
  usage: '.bilgi'
};
