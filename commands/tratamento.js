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
    
    //console.log(" "+totalGlobo+" "+totalMortes+" "+totalNovosCasosHoje +" "+totalMortesHoje);

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
        .setTitle("Tratamento para o Covid-19")
        .setURL("http://www.saude.ba.gov.br/temasdesaude/coronavirus/")
        .setDescription("No primeiro sinal dos sintomas, procure orientação médica (NÃO SE AUTO MEDIQUE).\nNão existe tratamento específico para infecções causadas por coronavírus humano. É indicado repouso e consumo de bastante água, além de algumas medidas adotadas para aliviar os sintomas, conforme cada caso, como, por exemplo:")
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
         
            { name: 'Não se auto medique', value: "Uso de medicamento para dor e febre (antitérmicos e analgésicos);"},
            { name: 'Alivio', value: "Uso de umidificador no quarto ou tomar banho quente para auxiliar no alívio da dor de garanta e tosse." },
            { name: 'Sintomas', value: "Assim que os primeiros sintomas surgirem, é fundamental procurar ajuda médica imediata para confirmar diagnóstico e iniciar o tratamento. Todos os pacientes que receberem alta durante os primeiros 7 dias do início do quadro (qualquer sintoma independente de febre), devem ser alertados para a possibilidade de piora tardia do quadro clínico e sinais de alerta de complicações, como: aparecimento de febre (podendo haver casos iniciais sem febre), elevação ou reaparecimento de febre ou sinais respiratórios, taquicardia (aumento dos batimentos cardíacos), dor pleurítica (dor no peito), fadiga (cansaço) e dispneia (falta de ar)." },


           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);



}