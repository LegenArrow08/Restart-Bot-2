const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("OYUN KOMUTLARI:",`
.mcskin:          ^Minecraft skininizi gösterir.^
.mcsunucu:        ^Minecraft sunucu istatistiklerinizi gösterir.^
.mcbaşarım:       ^Minecraft başarısı kazanırsınız.^
.rocketleague:    ^Rocketleague istatistiklerinizi gösterir.^
.battlefield:     ^Battlefield istatistiklerinizi gösterir.^

* örn: .skin <ihsanbakidogan>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyun',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'oyun'
};