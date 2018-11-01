const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');

exports.run = (client, message) => {

var user = '';
        let member = message.mentions.users.first();
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }
    member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
       if (roles.length < 1) roles = ['Bu Kullanıcının Rolü Yok!'];
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    if(user.presence.status === "dnd"){
      var durum = 'Rahatsız Etmeyin'
    }
    else if(user.presence.status === "online"){
      var durum = 'Çevrimiçi'
    }
    else if(user.presence.status === "idle"){
      var durum = "Boşta"
    }
      else {
      var durum = "Görünmez"
    }
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(user.tag, user.avatarURL || user.defaultAvatarURL)
      .setThumbnail(user.avatarURL || user.defaultAvatarURL)
      .setTitle('Kullanıcı;')
      .addField("Şu Anda Oynadığı Oyun", user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok', true)
      .addField('Durum:', `${durum}`)
      .addField('Katılım Tarihi (Sunucu)', `${userJoined}`, true)
      .addField('Katılım Tarihi (Discord)', `${daysCreated}`, true)
      .addField('Kimlik:', user.id, true)
      .addField('Bot Mu?:', user.bot ? '\n Evet' : 'Hayır', true)
      .addField('Rolleri:', message.guild.member(user).roles.map(m => m.name).join(' | '), true)
      .addField('Son Gönderdiği Mesaj:', user.lastMessage || 'Yok', true)
      .addField('Hesap Oluşturma Tarihi:', moment(user.createdAt).format('DD/MM/YYYY'), true)
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot)` + "**\n**"+`[DBL Oyver](Henüz Yok)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/qwkHqMj)`, false)
      .setFooter('Restart Bot | Beta', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);

    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Bilgilerini Gösterir.',
  usage: 'kullanıcı'
};
