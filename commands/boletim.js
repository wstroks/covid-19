

const cheerio = require('cheerio');
const axios = require('axios');


const fetchData = async (url) => {
    const result = await axios.get(url)
    return JSON.parse(JSON.stringify(result.data));
}

const fetchData1 = async (url) => {
    const result = await axios.get(url)
    return result.data;
}

module.exports = async (client, msg, args) => {


   
    const url = `https://brasil.io/api/dataset/covid19/boletim/data/?format=json`;
    // console.log(url);
    const content = await fetchData(url);

    var link = "";

    var populacao = 0;
    var jsonData = content;
    var estado = "";

    var contador = 0;
    var verifica = 0;
   
    var dataB = "";
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano4 = data.getFullYear();
    var str_data = ano4 + '-0' + (mes + 1) + '-' + dia;
    var str_data1 = ano4 + '-0' + (mes + 1) + '-' + (dia - 1);
    for (var i = 0; i < jsonData.results.length; i++) {
        var counter = jsonData.results[i];

        if (counter.state == args[1].toUpperCase() && counter.date == str_data) {

            link = counter.url;
            estado = counter.state;
            contador++;
            dataB = str_data;
            verifica++;

        } if (counter.state == args[1].toUpperCase() && counter.date == str_data1 && contador == 0) {

            link = counter.url;
            estado = counter.state;
            dataB = str_data1;
            verifica++;
        }
    }

    if (verifica == 0) {
        msg.channel.send("A sua busca falhou, verifique se digitou a sigla do estado da maneira correta!\n```!boletim <sigla do estado>``````Exemplo: !boletim rj```")
    } else {

        const Discord = require('discord.js');

        // inside a command, event listener, etc.
        var exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Boletim informativo de ${estado}`)
            .setURL(link)
            .setDescription('Fique por dentro das últimas notícias sobre o COVID-19 em seu estado. Clique no título para ler.')
            .setThumbnail('http://www.saude.ba.gov.br/wp-content/uploads/2020/03/Imagem-padrao-portal-novo-coronavirus-covid19.3-360x240.jpeg')

            .setTimestamp()
            .setFooter('Clique no titulo e veja mais informações sobre', '');


        msg.author.send(exampleEmbed);
    }


}



const main = async (msg, args) => {
    
}


