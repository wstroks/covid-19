module.exports = async (client, msg, args) => {

    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Fake News Covid-19")
        .setURL("https://www.saude.gov.br/fakenews")
        .setDescription("Para combater as Fake News sobre saúde, o Ministério da Saúde, de forma inovadora, está disponibilizando um número de WhatsApp para envio de mensagens da população. Vale destacar que o canal não será um SAC ou tira dúvidas dos usuários, mas um espaço exclusivo para receber informações virais, que serão apuradas pelas áreas técnicas e respondidas oficialmente se são verdade ou mentira.\nQualquer cidadão poderá enviar gratuitamente mensagens com imagens ou textos que tenha recebido nas redes sociais para confirmar se a informação procede, antes de continuar compartilhando. O número é (61)99289-4640.")
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);


}
