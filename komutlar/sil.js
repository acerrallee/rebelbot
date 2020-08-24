const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const miktarbelirt = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**You need to specify the amount of messages to delete!**")
  
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("**Sorry, you don't have enough permissions to use this command!**");
  if (!args[0])
    return message.channel.send(miktarbelirt);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`**✅ | Successfully ${args[0]} messages deleted.**`)
      .then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed();
    let messagecount = parseInt(args.join(" "));
    message.channel
      .fetchMessages({
        limit: messagecount
      })
      .then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**👨 | Admin:**", message.author.username)
      .addField("**🔥 | Result:**", `Successful`)
      .addField("**📝 | How many:**", +messagecount)
    return message.channel
      .sendEmbed(sohbetsilindi)
      .then(msg => msg.delete(5000));
    console
      .log("**Sohbet**" + message.member + "**Tarafından Silindi!**")
      .then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clear"],
  permLevel: 2
};

exports.help = {
  name: "clear"
};
