

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
       
    var arrayDadosN=[];
    var arrayDados=[];
    for(var i=0; i<40; i++){
        var t=$(`#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(${i})`).text();
        //console.log(t+"x");
        arrayDadosN=[];
        arrayDadosN=t.split("\n");
       // console.log(arrayDadosN+"yy");
        
            if(arrayDadosN[2]=="Brazil"){
                contador=i;
                arrayDados=arrayDadosN;
                console.log('BB'+arrayDados);
            }
          

    }
    //console.log(arrayDados+"oo");
       
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
            { name: 'Total de Casos', value: arrayDados[3], inline: true },
            { name: 'Total de Casos Recuperados', value: arrayDados[7], inline: true },
            { name: 'Total de Mortes', value: arrayDados[5], inline: true },
            { name: 'Total de Casos Ativos', value: arrayDados[9], inline: true },
            { name: 'Total de Casos Críticos', value: arrayDados[10], inline: true },
           

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);



}