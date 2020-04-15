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



    const url = "https://www.unimed.coop.br/viver-bem/saude-em-pauta/coronavirus-e-covid-19-perguntas-e-respostas#Transmiss%C3%A3o%20do%20coronav%C3%ADrus";
    const content = await fetchData(url);
    const $ = cheerio.load(content)


    const totalGlobo = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(2)').text();
    const totalMortes = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(4)').text();
    // const text2 = $('#tv-covid-page > div > header > div > div.mainChartBlock-3VyQGT5m > div.info-c0IPPK6E > div > div:nth-child(3) > span.deathsCount-2idx61EX.statCount-114jYdmn').text();
    const totalNovosCasosHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(3)').text();
    const totalMortesHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(5)').text();
    const totalcasosRecuperados = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(6)').text();
    const totalAtivos = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(7)').text();
    
    console.log(" "+totalGlobo+" "+totalMortes+" "+totalNovosCasosHoje +" "+totalMortesHoje);

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