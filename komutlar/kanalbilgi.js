const Discord = require('discord.js')

exports.run = (bot, message) => {
  const ok = message.client.emojis.get("441922608720510987");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField("ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz İçerik", "Evet", true)
                }
                else {
                    embed.addField(" Uygunsuz İçerik", "Hayır", true)
                }
                embed.addField(" Oluşturulduğu Tarih", message.channel.createdAt, true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL)
                .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot)` + "**\n**"+`[DBL Oyver](Henüz Yok)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/qwkHqMj)`, false)
                .setFooter("Restart Bot | Beta", "https://cdn.discordapp.com/avatars/460723895268278283/b672caa2243759b14c3d7c8f185b6ddb.png?size=2048")
            message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: '**Buluduğunuz** Kanalın Bilgilerini Verir . ',
  usage: '.kanalbilgi'
};
