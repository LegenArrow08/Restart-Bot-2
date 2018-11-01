 exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Kimin Avatarına Bakmak İstiyon!')
}});
   const Discord = require('discord.js')
        const kullanicibilgimk = new Discord.RichEmbed()
        .setTitle(member.user.tag+" kullanıcısının profil fotoğrafı!")
        .setImage(member.user.avatarURL)
        .setFooter("Restart Bot - Avatar Sistemi", "https://discordapp.com/api/oauth2/authorize?client_id=490451776403800064&permissions=8&scope=bot")
        return msg.channel.send(kullanicibilgimk);
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

 exports.help = {
 name: 'avatar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: '.avatar & .avatar [@Kullanıcı]'
 }
