const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Sorry, you don't have enough permissions to use this command!`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`?`).setColor("RANDOM"));
    
    db.delete(`codeminglog_${message.guild.id}`)
   message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Mod-Log Successfully reset!`).setColor("RANDOM"));

    return
  }
  
if (!logk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Tag channel!!`).setColor("RANDOM"));
 

db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Mod-Log Channel set to ${logk}!`).setColor("RANDOM"));

console.log(`Mod-log Komutu ${message.author.username} Tarafından Kullanıldı`)
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 3 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};