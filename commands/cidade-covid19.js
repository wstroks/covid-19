

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
    console.log("a " + args);
    
    var estado="";
    var novoArray="";
    for(var i=1; i<args.length; i++){
        if(i==(args.length-1)){
            novoArray+=args[i];
        }else{
        novoArray+=args[i]+" ";}
    }
    console.log(novoArray+"x");
    var urlArray=novoArray.split("-");
    var cidade=urlArray[0].split(" ");
  
    estado=urlArray[1];
    var altoEstado=estado.toUpperCase();
    //console.log(cidade+" "+altoEstado+" x");
    var cidadeUrl="";
    for(var i=0; i<cidade.length; i++){
        if(i==(cidade.length-1)){
            cidadeUrl+=cidade[i];
        }else{
            cidadeUrl+=cidade[i]+"+";}
    }
    

    


    const url = `https://brasil.io/dataset/covid19/caso?search=${cidadeUrl}&date=&state=${altoEstado}&city=&place_type=&is_last=True&city_ibge_code=&order_for_place=`;
    console.log(url);
    const content = await fetchData(url);
    
    const $ = cheerio.load(content)

/*
    const totalGlobo = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(2)').text();
    const totalMortes = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(4)').text();
    // const text2 = $('#tv-covid-page > div > header > div > div.mainChartBlock-3VyQGT5m > div.info-c0IPPK6E > div > div:nth-child(3) > span.deathsCount-2idx61EX.statCount-114jYdmn').text();
    const totalNovosCasosHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(3)').text();
    const totalMortesHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(5)').text();
    const totalcasosRecuperados = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(6)').text();
    const totalAtivos = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(7)').text();
  
    */
   const nomeCidade2=$('#covid19 > tbody > tr > td:nth-child(3)').html();
   console.log(nomeCidade2 + " html");
    const nomeCidade=$('#covid19 > tbody > tr > td:nth-child(3)').text();
    const totalCasos=$('#covid19 > tbody > tr > td:nth-child(5)').text();
    var totalMortes= $('#covid19 > tbody > tr > td:nth-child(6)').text();
    if(!totalMortes){
        totalMortes=0;
    }
    console.log(" "+nomeCidade+" "+totalCasos);
    /*s = t.replace(/[\n]+/g, '');
    var arrayDados=t.split(" ");
    const filtrado = arrayDados.filter(x => x.trim().length > 0);
  
    console.log(filtrado);  // [5,6]*/
    //console.log(arrayDados);

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
    if(!nomeCidade){
        msg.channel.send("Ufa, sua cidade não apresenta nenhum caso de COVID-19!");
    }else{
    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Dados ${nomeCidade} do Covid-19`)
        .setURL("https://brasil.io/dataset/covid19/")
        .setDescription('')
        .setThumbnail('https://www.gstatic.com/onebox/sports/logos/flags/brazil_icon_square.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: 'Total de Casos', value:  totalCasos, inline: true },
            { name: 'Total de Mortes', value: totalMortes, inline: true },
           

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);}



}