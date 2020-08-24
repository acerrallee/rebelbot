const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**Sorry, you don't have enough permissions to use this command!**`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkiyok)
  
  let mtkisi = message.mentions.users.first()
  
  var sebp = args.slice(1).join(" ") || "Not specified"
  
  const kisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**You must tag a person!**`)
  
  if (!mtkisi)
    return message.channel.send(kisiyok)
  
  const mutelencek = message.guild.member(mtkisi)
  
  mutelencek.addRole(db.fetch(`alphamuterol${message.guild.id}`))
  
  const tamamdir = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**The person you specified has been successfully muted!!**`)
  
  message.channel.send(tamamdir)
  
  let modlogkanal = message.guild.channels.find(channel => channel.name === "ceza-takip")
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(" User Muted")
  .addField(`Muted:`, `${mtkisi}`)
  .addField(`Admin:`, `${message.author}`)
  .addField(`Reason:`, `${sebp}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  perm: 0
}

exports.help = {
  name: "Mute",
  description: "Belirttiğiniz Kişiye Mute Atar",
  usage: "/mute @Kişi (Sebep)"
}