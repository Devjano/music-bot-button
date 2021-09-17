module.exports = {
    name: "ping",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["ping"],
    run: async function(client, message, args, user) {
        var states = "<a:jano_13:804354511355117598> Excellent";
        var states2 = "<a:jano_13:804354511355117598> Excellent";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (message.author.bot) return;
        message.channel.send({
            embed: {
                description: `**Time Taken:** ${msg} ms <a:jano_43:840250638483062784> | ${states}\n**WebSocket:** ${api} ms <a:jano_43:840250638483062784> | ${states2}`,
                color: 0x2F3136
            }
        });
    }
};
