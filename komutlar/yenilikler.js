const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Sürüm 1.0.1**

			> Taş,kağıt,makas komutu eklendi. _kullanmak için \`.tkm\`_
			> StarWars komutu eklendi. _kullanmak için \`.starwars\`_
			> Sustur komutu eklendi. _kullanmak için \`.sustur\`_
			> SusturAç komutu eklendi. _kullanmak için \`.susturaç\`_
		  > Rol-Ver komutu eklendi. _kullanmak için \`.rol-ver\`_
			> Roller komutu eklendi. _kullanmak için \`.roller\`_

			Komutları görmek için \`.yardım\`
			`)
			.setColor('RED');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Sürüm 1.0.1**

			> Taş,kağıt,makas komutu eklendi. _kullanmak için \`.tkm\`_
			> StarWars komutu eklendi. _kullanmak için \`.starwars\`_
			> Sustur komutu eklendi. _kullanmak için \`.sustur\`_
			> SusturAç komutu eklendi. _kullanmak için \`.susturaç\`_
		  > Rol-Ver komutu eklendi. _kullanmak için \`.rol-ver\`_
			> Roller komutu eklendi. _kullanmak için \`.roller\`_

			Komutları görmek için \`.yardım\`
		`)
		.setColor('RED');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'yenilikle.',
  usage: 'yenilikle'
};
