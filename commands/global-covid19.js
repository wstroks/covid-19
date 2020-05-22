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


    const totalGlobo = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(3)').text();
    const totalMortes = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(5)').text();
    // const text2 = $('#tv-covid-page > div > header > div > div.mainChartBlock-3VyQGT5m > div.info-c0IPPK6E > div > div:nth-child(3) > span.deathsCount-2idx61EX.statCount-114jYdmn').text();
    const totalNovosCasosHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(4)').text();
    const totalMortesHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(6)').text();
    const totalcasosRecuperados = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(7)').text();
    const totalAtivos = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(8)').text();
    

    const Discord = require('discord.js');
 
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


}