

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
    return JSON.parse(JSON.stringify(result.data));
}

const fetchData1 = async (url) => {
    const result = await axios.get(url)
    return result.data;
}

const main = async (msg, args) => {
    /* console.log("a " + args);
     
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
     }*/
    /*
    axios.get('curl -X GET https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=BA').then(function(data){
        console.log(data);
    });*/



    const url = `https://brasil.io/api/dataset/covid19/boletim/data/?format=json`;
    // console.log(url);
    const content = await fetchData(url);


    //if (content.results[i].date == "2020-04-18") {
    //  console.log(JSON.stringify(content.results));

    // }
    var link = "";

    var populacao = 0;
    var jsonData = content;
    var estado = "";

    var contador = 0;
    var verifica=0;
    //counter.is_last==true
    var dataB="";
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano4 = data.getFullYear();
    var str_data = ano4 + '-0' + (mes + 1) + '-' + dia;
    var str_data1 = ano4 + '-0' + (mes + 1) + '-' + (dia - 1);
    for (var i = 0; i < jsonData.results.length; i++) {
        var counter = jsonData.results[i];

        if (counter.state == args[1].toUpperCase() && counter.date == str_data) {
            //console.log("data "+counter.date +"\n eaths_pneumonia_2019: "+counter.deaths_pneumonia_2019 + " vs deaths_pneumonia_2020: "+counter.deaths_pneumonia_2020+"\n deaths_respiratory_failure_2019: "+counter.deaths_respiratory_failure_2019 + " vs deaths_respiratory_failure_2020: "+counter.deaths_respiratory_failure_2020+"\n deaths_covid19: "+counter.deaths_covid19 +"\n estado: "+counter.state+"\n\n");
          //  console.log(" naõ entrou")
            link = counter.url;
            estado = counter.state;
            contador++;
            dataB=str_data;
            verifica++;

        } if (counter.state == args[1].toUpperCase() && counter.date == str_data1 && contador==0) {
            //console.log(" naõ entrou")
            link = counter.url;
            estado = counter.state;
            dataB=str_data1;
            verifica++;
        }//console.log("data "+counter.);
    }

    if (verifica==0) {
        msg.channel.send("A sua busca falhou, verifique se digitou a sigla do estado da maneira correta!\n```!boletim <sigla do estado>``````Exemplo: !boletim rj```")
    } else {

        const Discord = require('discord.js');

        // inside a command, event listener, etc.
        var exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Boletim informativo de ${estado}`)
            .setURL(link)
            .setDescription('Clique no título do card e acesse o boletim informativo do seu estado.')
            .setThumbnail('http://www.saude.ba.gov.br/wp-content/uploads/2020/03/Imagem-padrao-portal-novo-coronavirus-covid19.3-360x240.jpeg')

            .setTimestamp()
            .setFooter('Clique no titulo e veja mais informações sobre', '');


        msg.author.send(exampleEmbed);
    }
    /*"deaths_covid19": 2,
    "deaths_pneumonia_2019": 256,
    "deaths_pneumonia_2020": 230,
    "deaths_respiratory_failure_2019": 127,
    "deaths_respiratory_failure_2020": 105,
    "epidemiological_week_2019": 16,
    "epidemiological_week_2020": 16,
    "new_deaths_covid19": 0,
    "new_deaths_pneumonia_2019": 2,
    "new_deaths_pneumonia_2020": 0,
    "new_deaths_respiratory_failure_2019": 1,
    "new_deaths_respiratory_failure_2020": 0,
    "state": "AC"*/


    /* const $ = cheerio.load(content)
     const totalGlobo = $('').html();
     console.log(totalGlobo);*/




    /*
        const totalGlobo = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(2)').text();
        const totalMortes = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(4)').text();
        // const text2 = $('#tv-covid-page > div > header > div > div.mainChartBlock-3VyQGT5m > div.info-c0IPPK6E > div > div:nth-child(3) > span.deathsCount-2idx61EX.statCount-114jYdmn').text();
        const totalNovosCasosHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(3)').text();
        const totalMortesHoje = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(5)').text();
        const totalcasosRecuperados = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(6)').text();
        const totalAtivos = $('#main_table_countries_today > tbody.total_row_body > tr > td:nth-child(7)').text();
      
        
       
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
      });
     
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
  
  
      msg.author.send(exampleEmbed);}*/





}

