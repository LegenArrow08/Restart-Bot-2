exports.run = async (client, message) => {
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Ses kanalında değilsin bak! Beni yalnız olmaya zorlama!"); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send(":x: Ses kanalınıza bağlanmak için yeterli izne sahip değilim. Giriş iznini kaçırdım."); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("Yetkilerimi Yükselt."); }

  message.member.voiceChannel.join();
  return message.channel.send(`Şimdi Bu Kanala Giriş Yaptım: ${message.member.voiceChannel}. Müzik Dinliyceksin`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['katıl'],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "gir",
  description: "Joins the VC that you are in.",
  usage: "",
  usageDelim: "",
};
