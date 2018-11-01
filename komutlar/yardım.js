const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** .eğlence = Eğlence komutları\n**•** .kişisel = Kişisel komutlar\n**•** .yetkili = Yetkili komutları\n**•** .oyun = Oyun komutları\n**•** .müzik = Müzik komutları\n**•** .destek = Destek komutları')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot)` + "**\n**"+`[DBL Oyver](Henüz Yok)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/qwkHqMj)`, false)
      .setFooter('Örnek kullanım: .eğlence')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
