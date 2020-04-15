const config = require('../config.json');

module.exports = (client, msg) =>{

    const avisoChannel = msg.guild.channels.cache.find(channel=>channel.id == config.avisosChannelId);
    
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    avisoChannel.send(`@kroverson ${message}`);
    msg.reply(`Avisado no canal ${avisoChannel}`);
}