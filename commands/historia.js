const request = require('request-promise');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require("fs");


module.exports = async (client, msg, args) => {


    main(msg, args);

}

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async (msg, args) => {



    const url = `https://www.paho.org/bra/index.php?option=com_content&view=article&id=6101:covid19&Itemid=875`;
    const content = await fetchData(url);
    const $ = cheerio.load(content)


    const text1 = $('#inner_content > div.item-page > div:nth-child(3) > p:nth-child(6)').text();
    const text2 = $('#inner_content > div.item-page > div:nth-child(3) > p:nth-child(7)').text();
    const text3 = $('#inner_content > div.item-page > div:nth-child(3) > p:nth-child(8)').text();


    // console.log(text1 +"\n \n"+text2+'\n\n'+text3+'\n\n'+text4+ "\n \n Leia a matéria completa no link: " + url);
    console.log(text1+"\n"+text2+"\n"+text3);
    msg.author.send("História do Covid-19\n\n"+text1+"\n"+text2+"\n"+text3)
    /*const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(text1)
        .setURL(regex.exec(splitArray[contador1])[2])
        .setDescription(text6)
        .setThumbnail('https:' + urlFoto)
        .addFields(
            { name: 'Comentário de Paciente', value: text5 },
            { name: 'Quantidade de Avaliações', value: array2[13], inline: true },

        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);*/







}