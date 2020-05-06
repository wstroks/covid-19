

const cheerio = require('cheerio');
const axios = require('axios');


module.exports = async (client, msg, args) => {


    main(msg, args);

}

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async (msg, args) => {
    // console.log("a " + args);

    var estado = "";
    var novoArray = "";
    for (var i = 1; i < args.length; i++) {
        if (i == (args.length - 1)) {
            novoArray += args[i];
        } else {
            novoArray += args[i] + " ";
        }
    }
    //console.log(novoArray+"x");
    var urlArray = novoArray.split("-");
    var cidade = urlArray[0].split(" ");

    estado = urlArray[1];
    var altoEstado = estado.toUpperCase();
    //console.log(cidade+" "+altoEstado+" x");
    var cidadeUrl = "";
    for (var i = 0; i < cidade.length; i++) {
        if (i == (cidade.length - 1)) {
            cidadeUrl += cidade[i];
        } else {
            cidadeUrl += cidade[i] + "+";
        }
    }





    const url = `https://brasil.io/dataset/covid19/caso?search=${cidadeUrl}&date=&state=${altoEstado}&city=&place_type=&is_last=True&city_ibge_code=&order_for_place=`;
    // console.log(url);
    const content = await fetchData(url);

    const $ = cheerio.load(content)
    const nomeCidade2 = $('#covid19 > tbody > tr > td:nth-child(3)').html();
    // console.log(nomeCidade2 + " html");
    const nomeCidade = $('#covid19 > tbody > tr > td:nth-child(3)').text();
    const totalCasos = $('#covid19 > tbody > tr > td:nth-child(5)').text();
    var totalMortes = $('#covid19 > tbody > tr > td:nth-child(6)').text();
    if (!totalMortes) {
        totalMortes = 0;
    }

    const Discord = require('discord.js');
    if (!nomeCidade) {
        msg.channel.send("Ufa, sua cidade não apresenta nenhum caso de COVID-19!");
    } else {
        // inside a command, event listener, etc.
        var exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Dados ${nomeCidade} do Covid-19`)
            .setURL("https://brasil.io/dataset/covid19/")
            .setDescription('')
            .setThumbnail('https://www.gstatic.com/onebox/sports/logos/flags/brazil_icon_square.png')
            .addFields(
                // { name: 'Comentário de Paciente', value: text5 },
                { name: 'Total de Casos', value: totalCasos, inline: true },
                { name: 'Total de Mortes', value: totalMortes, inline: true },



            )
            .setTimestamp()
            .setFooter('Clique no titulo e veja mais informações sobre', '');


        msg.author.send(exampleEmbed);
    }



}