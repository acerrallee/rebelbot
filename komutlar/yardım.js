const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('REBEL Help Menu')
.setTimestamp()
.addField('🎼 Music Bot Commands ', '``-,!,>play [music name or link] ▸ Plays a song with the given name or link.``, ``-,!,>stop ▸ Stops the current playing song.``, ``-,!,>skip ▸ Skips the currently playing song.``, ``-,!,>pause ▸ Pauses the currently playing song.``, ``-,!,>resume ▸ Resume paused music.``, ``-,!,>disconnect ▸ Disconnect the bot from the voice channel it is in.``')
.addField('🔒 Suit Bot Commands ', '``rebel/limit ▸ Limit the number of users allowed in your channel.``, ``rebel/unlimit ▸ Remove the limit.``, ``rebel/kick ▸ Start a votekick to remove someone from your channel.``')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
 