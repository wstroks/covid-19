

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
   
    

    var est=args[1].toUpperCase();

    const url = `https://brasil.io/dataset/covid19/caso/?search=&date=&state=${est}&city=&place_type=state&is_last=True&city_ibge_code=&order_for_place=`;
    //console.log(url);
    const content = await fetchData(url);
    
    const $ = cheerio.load(content)
    const totalCasos=$('#covid19 > tbody > tr > td:nth-child(5)').text();
    var totalMortes= $('#covid19 > tbody > tr > td:nth-child(6)').text();
        
    const Discord = require('discord.js');
    if(totalMortes==""){
        msg.channel.send("A sua busca falhou, verifique se digitou a sigla do estado da maneira correta!\n```!estado-covid19 <sigla do estado>``````Exemplo: !estado-covid19 rj```")
    }else{
    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Dados ${est} do Covid-19`)
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