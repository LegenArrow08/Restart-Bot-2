const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MÜZİK KOMUTLARI:",`
.çal:         ^Yazdığınız şarkıyı çalar.^
.kuyruk:      ^Şarkı kuyruğunu gösterir.^
.devam:       ^Duraklatılan şarkıya devam eder.^
.geç:         ^Çalan şarkıyı geçer.^
.dur:         ^Çalınan şarkıyı duraklatır.^
.çalan:       ^Mesajı yazdığınız anda hangi şarkının çaldığını gösterir.^
.duraklat:    ^Oynatılan şarkıyı duraklatır.^
.ses:         ^Oynatılan şarkının ses seviyesini ayarlar.^
.gir:         ^Bulunduğun kanala giriş yapar.^
.ayrıl:       ^Bulunduğun kanaldan çıkış yapar.^


* örn: .çal <şarkıismi>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'müzik'
};