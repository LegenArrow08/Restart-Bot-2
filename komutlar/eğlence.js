const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence komutları")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** .ascii = Yazdığınız yazıyı asciiya dönüştürür.\n**•** .atla = Atlama gifi atar.\n**•** .coolresim = Cool resim gösterir.\n**•** .jdi = Jdi resmi atar.\n**•** .mesajdöndür = Yazdığınız mesajı döndürür.\n**•** .emojiyazı = Yazdığınız yazıyı emojili hale çevirip atar.\n**•** .eski = Resminizi eskileştirir.\n**•** .gif = Rastgele gif atar.\n**•** .tkm = Taş,kağıt,makas oyununu oynarsınız.\n**•** .starwars = Starwars filmini izlersiniz.')
      .setFooter('Örnek kullanım: .ascii <yazı>')

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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm Eğlence Komutlarını Gösterir.',
  usage: 'eğlence [komut]'
};