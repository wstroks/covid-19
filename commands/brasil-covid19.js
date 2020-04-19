

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



    const url = "https://www.worldometers.info/coronavirus/";
    const content = await fetchData(url);
    const $ = cheerio.load(content)


    const totalGlobo = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(2)').text();
    const totalMortes = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(4)').text();
    // const text2 = $('#tv-covid-page > div > header > div > div.mainChartBlock-3VyQGT5m > div.info-c0IPPK6E > div > div:nth-child(3) > span.deathsCount-2idx61EX.statCount-114jYdmn').text();
    const totalNovosCasosHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(3)').text();
    const totalMortesHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(5)').text();
    const totalcasosRecuperados = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(6)').text();
    const totalAtivos = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(7)').text();
    
    var arrayDadosN=[];
    var arrayDados=[];
    for(var i=0; i<40; i++){
        var t=$(`#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(${i})`).text();
        arrayDadosN=[];
        arrayDadosN=t.split("\n");
        
            if(arrayDadosN[1]=="Brazil"){
                contador=i;
                arrayDados=t.split("\n");
            }
          

    }
   // arrayDados=t.split("\n");
    console.log(arrayDados);

    // console.log(text1 +"\n \n"+text2+'\n\n'+text3+'\n\n'+text4+ "\n \n Leia a matéria completa no link: " + url);
  // console.log(text1 + "\nxxx"+text2);
  /*var contador=0;
  for(var i=0; i<arrayDados.length; i++){
    if(arrayDados[i]=="Brazil"){
        contador=i;
    }
  }*/
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
    
    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Dados Brasil do Covid-19`)
        .setURL("https://www.worldometers.info/coronavirus/")
        .setDescription('')
        .setThumbnail('https://www.gstatic.com/onebox/sports/logos/flags/brazil_icon_square.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: 'Total de Casos', value: arrayDados[2], inline: true },
            { name: 'Total de Mortes', value: arrayDados[4], inline: true },
            { name: 'Total de Novos Hoje', value: arrayDados[3], inline: true },
            { name: 'Total de Casos Ativos', value: arrayDados[7], inline: true },
            { name: 'Total de Casos Recuperados', value: arrayDados[6], inline: true },
            { name: 'Total de Mortes Hoje', value:arrayDados[5], inline: true },

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);



}