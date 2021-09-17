module.exports = async function(client, message, err) {
    var { MessageEmbed } = require('discord.js');
    message.channel.send(
        new MessageEmbed()
        .setColor('BLUE')
        .setDescription(err)
    )
}
