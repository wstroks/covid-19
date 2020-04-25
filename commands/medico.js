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

const main = async (msg, args, id) => {
    //console.log("a " + id);
    var medico = "";
    var cidade = "";
    var alarme2 = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i] == "l") {
            alarme2 = i;

        }

    }

    for (var i = 2; i < alarme2; i++) {
        if (i == (alarme2 - 1)) {
            medico += args[i];
        } else {
            medico += args[i] + " ";
        }

    }
    for (var i = alarme2 + 1; i < args.length; i++) {
        if (i == (alarme2 - 1)) {
            cidade += args[i];
        } else {
            cidade += args[i] + " ";
        }

    }

    var jsonData = require("../data.json");
    var id = "";
    for (var i = 0; i < jsonData.length; i++) {
       // console.log("Id: " + jsonData[i].id + " Nome: " + jsonData[i].nome + "\n");
        if (medico.toUpperCase() == jsonData[i].nome.toUpperCase()) {
           // console.log("logou s");
            id = `${jsonData[i].id}`;
        }
    }
   // console.log(medico + " " + cidade + " " + id);

    const url = `https://doctoralia.com.br/pesquisa?filters%5Bspecializations%5D%5B%5D=${id}&q=${medico}&loc=${cidade}`;
    const content = await fetchData(url);
    const $ = cheerio.load(content)
    var contador=0;
    var contador1=0;
    var contador2=0;
    for (var j = 1; j < 4; j++) {
        const text1 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.media > div.media-body > h3').text();

        const text2 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.media > div.media-body > h3').html();
        const text3 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.media > div.media-body > a > span').text();
        const text4 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.media > div.media-left.offset-right-1 > a > span').html();
        var text5 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.offset-top-1 > div > em.hidden-xs').text();
        const text6 = $('#search-content > div > ul > li:nth-child(' + j + ') > div.panel.panel-default > div > div > div.col-md-6.result-column.padding-2.padding-left-3.padding-xs-left-3.padding-xs-left-3.padding-xs-right-3.padding-xs-right-3 > div.dp-doctor-card.dp-doctor-card-md > div.media > div.media-body > h4').text();
        // console.log(text1 +"\n \n"+text2+'\n\n'+text3+'\n\n'+text4+ "\n \n Leia a matéria completa no link: " + url);
       // console.log(text4+" s");
        /*if(text4==null){
            contador2++;
            if(contador2==1){
            msg.channel.send("A buscar falhou! Digite novamente o tipo de médico que deseja!!\n```!medico p <tipo de médico> l <cidade>-<sigla do estado>```\n```Exemplo:\n!medico p fonoaudiólogo l feira de santana-ba \n!medico p psicólogo l feira de santana-ba\n!medico p médico clínico geral l salvador-ba```\nVale ressaltar, que é de suma importância a escrita de sua cidade e o tipo de médico da maneira correta e com acentuação caso tenha. Lembrando que ao clicar no nome do profissional é possível saber mais informações a respeito.");}
        }else{
        var array4 = text4.split(" ");
        //var array5 = text5.split(" ");
       // console.log("sozinho"+ text5);
        if(!text5){
            text5="Não tem comentários";
          //  console.log("entrou ");
        }*/
        var regex4 = /(src=")(.*)(")/;
        //var x= array4[4].replace(/"/g, '');
        //console.log(array4[4]+" wwwww"+x+" ");
        var array2 = text3.split("\t");
       // console.log(array4[6] + "a1");
        var urlFoto = "";
        var urlLink = "";
        for (i = 0; i < array4.length; i++) {
            var test = array4[i].indexOf("src=")>-1;
            if (test) {
              //  console.log(`${i} ${array4[i]}`)
                contador=i;
                //console.log("Aqui22 "+ regex4.exec(array4[i])[2]);

            }

        }
        
        urlFoto=regex4.exec(array4[contador])[2];
        
            
       

       // console.log(text4 + " 111");
        // msg.author.send(text3);

        var regex = /(href=")(.*)(")/;
        var splitArray = text2.split(" ");

        for (i = 0; i < splitArray.length; i++) {
            var test = splitArray[i].indexOf("href=")>-1;
            if (test) {
              //  console.log(`${i} ${splitArray[i]}`)
                contador1=i;
              //  console.log("Aqui "+ regex.exec(splitArray[i])[2]);

            }

        }
       // console.log("112 "+regex.exec(splitArray[contador1])[2]+" text"+text5+" "+array2[13]);
        
        const Discord = require('discord.js');

        // inside a command, event listener, etc.
        var exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(text1)
            .setURL(regex.exec(splitArray[contador1])[2])
            .setDescription(text6)
            .setThumbnail('https:'+urlFoto)
            .addFields(
                { name: 'Comentário de Paciente', value: text5 },
                { name: 'Quantidade de Avaliações', value: array2[13], inline: true },

            )
            .setTimestamp()
            .setFooter('Clique no titulo e veja mais informações sobre','');


        msg.author.send(exampleEmbed);}


    

    




}