module.exports = {
    name: "ping",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["ping"],
    run: async function(client, message, args, user) {
        var states = "";
        var states2 = "";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (message.author.bot) return;
        message.channel.send({
            embed: {
                description: `**Time Taken:** ${msg} ms :signal_strength: | ${states}\n**WebSocket:** ${api} ms :signal_strength: | ${states2}`,
                color: 0x2F3136
            }
        });
    }
};
