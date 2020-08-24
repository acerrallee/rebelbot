const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const yetkiyokembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Sorry, you don't have enough permissions to use this command!**`);

  const birinietiketleembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**You must tag a person!**`);

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(yetkiyokembed);

  const banlanacakkisi = message.mentions.users.first();
  if (!banlanacakkisi) return message.channel.send(birinietiketleembed);

  const yetkilileribanlayamam = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**I can't ban the authorities from the server!**`);

 if (!message.guild.member(banlanacakkisi).kickable)
   return message.channel.send(yetkilileribanlayamam);

  var sebebi = args.slice(1).join(" ") || "Not specified"

  const basariylabanlandi = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**User successfully kicked from server.**`)

  message.guild.ban(banlanacakkisi);
  message.channel.send(basariylabanlandi);
  
  let modlogkanal = message.guild.channels.find(channel => channel.name === "ceza-takip")
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("**User Banned from Server!**")
  .addField(`**Banned**`, `${banlanacakkisi}`)
  .addField(`**Admin**`, `${message.author}`)
  .addField(`**Reason**`, `${sebebi}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kick", "kickle", "at"],
  perm: 0
};

exports.help = {
  name: "Kick",
  description: "Kişiyi Sunucudan Atar",
  usage: "+kick @Kişi Sebep"
};
