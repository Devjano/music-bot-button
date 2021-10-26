module.exports = {
    name: "help",
    cooldown: 3,
    description: 'Bot Orders',
    aliases: ["h"],
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
               
               
                .setDescription(`
> **Info Commands**
> \`${prefix}play \`
> \`${prefix}skip \`
> \`${prefix}nowplaying \`
> \`${prefix}loop \`
> \`${prefix}queue \`
> \`${prefix}lyrics \`
> \`${prefix}join \`
> \`${prefix}pause \`
> \`${prefix}resume \`
> \`${prefix}radio \`
> \`${prefix}stop \`
> \`${prefix}filter \`
> \`${prefix}prefix \`
> \`${prefix}leave \`
> \`${prefix}volume \`
> \`${prefix}ping \`
> \`${prefix}invite \`
> \`${prefix}support \`
> \`${prefix}info \`
> **[ \`invite\` ](https://discord.com/api/oauth2/authorize?client_id=791856757844475914&permissions=0&scope=bot)** , **[ \`support\` ](https://discord.gg/7sEtecbAM6)** 
   `);


              
         
            setTimeout(() => {
                message.channel.send({
                    embed: help
                })
            }, 500);
        } catch (err) {
            console.log(err)
        }
    }
};
