module.exports = async (client, msg, args) => {

    const Discord = require('discord.js');
    var exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Atendimento para Covid-19")
    .setURL("http://www.saude.ba.gov.br/temasdesaude/coronavirus/")
    .setDescription("O Governo Federal disponibilizou o canal de atendimento para o covid-19 (Telefone SUS 136), ligue já caso tenha duvidas ou manifeste os sintomas")
    .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
    .setTimestamp()
    .setFooter('Clique no titulo e veja mais informações sobre', '');


msg.author.send(exampleEmbed);
}

