const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;


    let help = new Discord.MessageEmbed()
      .setAuthor("")
      .setTitle("**Giveaway Bot Commands :**", true)
      .addField("_ _", "_ _", false)
      .addField(`πγ»**Giveaway**`,`${prefix}start [channel-name] [Time] [winners] [Prize]\n\n${prefix}reroll [prize name]\n\n${prefix}end [prize name]`, false)
      .addField("ββββββββββββββββββββββββββββ", "_ _", false)
      .addField("π«γ»Examples", `${prefix}start #giveaway 5m 1 Testing\n\n${prefix}end Testing\n\n${prefix}reroll Testing`, false)
.addField("ββββββββββββββββββββββββββββ", "_ _", false)
      .addField("π οΈγ»Utility", `${prefix}ping`, false)
      .addField("βΉγ»Information", `${prefix}stats`, false)
      .addField("_ _", "_ _", false)
      .setTimestamp()
      .setImage('https://media.discordapp.net/attachments/902372401944358912/902375174207336498/bitmap.png?width=663&height=373')
      .setThumbnail(client.user.avatarURL({
                size: 4096,
                format: 'png'
            }))
      .setFooter(`Requested By : ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send(`> β¬ **Sent the commands in your DM** π₯
> β¬ **If you do not receive the message, open your DM π**`);

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}