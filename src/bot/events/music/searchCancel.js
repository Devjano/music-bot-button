module.exports = async function(client, message) {
    var { MessageEmbed } = require('discord.js');
    var msg = require('quick.db').fetch(`Delete_${message.channel.id}`);
    var deleted = new MessageEmbed()
        .setTitle('<a:jano_26:799630865474256972> | **Timeout**')
        .setColor('BLUE')
    message.channel.messages.fetch(msg).then(m => m.edit({ embed: deleted })).catch(err => { return });
};
