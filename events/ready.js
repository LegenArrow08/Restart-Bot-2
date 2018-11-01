const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
    setTimeout(() => {  
client.channels.get("507278802141839391").setName(`Kanal: ${client.channels.size}`)  
    }, 1000);

}, 8000);
setInterval(function() {
    setTimeout(() => {  
client.channels.get("507278898145394688").setName(`Kullanıcı: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`) 
    }, 1000);

}, 8000);


setInterval(function() {
setTimeout(() => {  
client.channels.get("507278958849687563").setName(`Sunucu: ${client.guilds.size}`)  
}, 1000);

}, 8000);
client.user.setPresence({
        game: {
            name: `.yardım - .davet | ${client.guilds.size} Sunucu | Restart Bot Beta`,
            type: 'PLAYING'
        },
        status: 'dnd'
    })

    console.log(`Giriş Yapıldı!`);
  console.log(client.channels.size + ` Kanal - ` + client.guilds.size + ` Sunucu - ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`); 
}