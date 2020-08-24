const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**Sorry, you don't have enough permissions to use this command!**`)
  
  if (!message.member.hasPermission ("ADMINISTRATOR"))
    return message.channel.send(yetkiyok)
  
  var mutrol = message.mentions.roles.first()
  
  const rolyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**To set mute role tag a role!**`)
  
  if (!mutrol)
    return message.channel.send(rolyok)
  
  db.set(`alphamuterol${message.guild.id}`, mutrol.id)
  
  const tmdr = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**Mute role successfully performed!**`)
  
  message.channel.send(tmdr)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute-role"],
  perm: 0
}

exports.help = {
  name: "Mute Rol",
  description: "Mute Atınca Verilecek Rolü Ayarlarsınız",
  usage: "+mute-rol @Rol"
}