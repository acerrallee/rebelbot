const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  



  let embed = new Discord.RichEmbed()
 .setTitle(`・Instagram Of Admins`)
 .addField('▸ Yusko  ', 'https://www.instagram.com/theyusko/')
 .addField('▸ Reydjan  ', 'https://www.instagram.com/reydjan12/' )
 .addField('▸ Kenan  ', 'https://www.instagram.com/agacsizkoala_____99/')
 .addField('▸ Serkan  ', 'https://www.instagram.com/serkan.hasancov22/')
 .setColor("WHITE")

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["instagram"],
  perm: 0
}

exports.help = {
  name: "",
  description: "ip",
  usage: "!ip"
}