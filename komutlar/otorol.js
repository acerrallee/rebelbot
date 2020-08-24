const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {

const yetkiyokknks = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Sorry, you don't have enough permissions to use this command!`, message.author.avatarURL)

if (!message.member.hasPermission ("ADMINISTRATOR"))
return message.channel.send(yetkiyokknks)

  const bsii = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("rebel!auto-role set or rebel!auto-role set @Role", message.author.avatarURL)
  
if(args.slice(0).join(" ").length < 1) 
  message.channel.send(bsii)
  
if(args[0] == "set") {
  
var otorolrol = message.mentions.roles.first()

const roldeetiketlesene = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`You must tag a person!!`, message.author.avatarURL)

if (!otorolrol)
return message.channel.send(roldeetiketlesene)

db.set(`alphaotorol${message.guild.id}`, otorolrol)

const tmmknkshadibb = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Auto-Role successfully set!`, message.author.avatarURL)

message.channel.send(tmmknkshadibb)
                        
return

};

  if(args[0] == "clear") {
    
    db.delete(`alphaotorol${message.guild.id}`)
    
  const ram = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Auto-Role successfully cleared!`, message.author.avatarURL)
  
  message.channel.send(ram)
    
  }
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["autorole", "auto-role"],
    perm: 0
};

exports.help = {
    name: "autorole",
    description: "Otorolü Ayarlar",
    usage: "/otorol ayarla @rol/sıfırla"
};