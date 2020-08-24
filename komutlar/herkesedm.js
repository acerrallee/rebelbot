const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  const mesaj = args.slice(0).join(" ");
  if (message.author.id !== "712727141783175321s")
    return message.channel.send(
      "Sorry, you don't have enough permissions to use this command!"
    );
  if (mesaj.length < 1) return message.reply("Enter message!");
  try {
    message.guild.members.forEach(m => {
      m.send(mesaj);
      console.log(`${m.user.tag} adlı kişiye yollandı.`);
    });
    message.channel.send("Message sent successfully.");
  } catch (e) {
    return console.log(`bir kişiye atılamadı`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "dm-all",
  description: "dm mesajı atar.",
  usage: "dm-all"
};
