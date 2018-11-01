const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("KULLANICI KOMUTLARI:",`
.afk:         ^Afk Moduna Geçersiniz.^
.bilgi:       ^Bot Hakkında Bilgiler Alırsınız.^
.davet:       ^Botun Davet Linkini Gönderir.^
.destek:      ^Botun Destek Sunucusunu Yollar.^
.geldim:      ^Afk Modundan Çıkmanızı Sağlar.^
.istatistik:  ^Botun istatistiklerini atar.^
.kullanıcı:   ^Yazan kullanıcının hakkında bilgiler verir.^
.ping:        ^Botun pingini gösterir.^
.hatabildir:  ^Botta Bulunan Bir Hatayı Göndermenizi Sağlar.^
.yardım:      ^Yardım Komutlarını Gösterir.^

* örn: .afk <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kişisel'
};