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

    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("História do Covid-19")
        .setURL("https://www.paho.org/bra/index.php?option=com_content&view=article&id=6101:covid19&Itemid=875")
        .setDescription("\n"+text1+"\n"+text2+"\n"+text3)
        //.setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);
    
}