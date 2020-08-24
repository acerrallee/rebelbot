const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  const yetkinyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**Sorry, you don't have enough permissions to use this command!!**`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkinyok)
  
  var yazi = args.slice(0).join(" ")
  
  const birseyyaz = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**You must specify something!**`, message.author.avatarURL)
  
  if (!yazi)
    return message.channel.send(birseyyaz)
  
  const mesaj = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`${yazi}`)
  
  message.delete()
  message.channel.send(mesaj)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["annon"],
  perm: 0
}

exports.help = {
  name: "annon",
  description: "Bota Mesaj Yazdırır.",
  usage: "+yaz (Yazı)"
}