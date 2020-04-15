const request = require('request-promise');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require("fs");
const got = require('got');



module.exports = async (client, msg, args) => {


    main(msg, args);

}

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async (msg, args) => {



    const url = "https://covid.saude.gov.br/";
    const content = await fetchData(url);
    const $ = cheerio.load(content)


    const totalGlobo = $('body > app-root > ion-app > ion-router-outlet > app-home > ion-content > div.container-cards.line-3.display-flex.justify-around > div.card-total.no-padding.width-50.height-768px').text();
    
    
    console.log(" "+totalGlobo);

    // console.log(text1 +"\n \n"+text2+'\n\n'+text3+'\n\n'+text4+ "\n \n Leia a matéria completa no link: " + url);
  // console.log(text1 + "\nxxx"+text2);

  
   // msg.author.send(text1);
   /* 
    got(url).then(response => {
        const dom = new JSDOM(response.body);
        dom.window.document.querySelectorAll('#maincounter-wrap > div > span').forEach(link => {
            console.log(link.href+"kkk");
          });
    }).catch(err => {
        console.log(err);
    });*/
/*
    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Dados Globais do Covid-19")
        .setURL("https://www.worldometers.info/coronavirus/")
        .setDescription('')
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: 'Total de Casos', value: totalGlobo, inline: true },
            { name: 'Total de Mortes', value: totalMortes, inline: true },
            { name: 'Total de Novos Hoje', value: totalNovosCasosHoje, inline: true },
            { name: 'Total de Casos Ativos', value: totalAtivos, inline: true },
            { name: 'Total de Casos Recuperados', value: totalcasosRecuperados, inline: true },
            { name: 'Total de Mortes Hoje', value: totalMortesHoje, inline: true },

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);
*/


}