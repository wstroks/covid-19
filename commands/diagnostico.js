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

    const url = "https://www.paho.org/bra/index.php?option=com_content&view=article&id=6101:covid19&Itemid=875";
    const content = await fetchData(url);
    const $ = cheerio.load(content)
    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Como é feito o diagnóstico do Covid-19?")
        .setURL("http://www.saude.ba.gov.br/temasdesaude/coronavirus/")
        .setDescription('O diagnóstico do coronavírus é feito com a coleta de materiais respiratórios (aspiração de vias aéreas ou indução de escarro). Na suspeita de coronavírus, é necessária a coleta de uma amostra, que será encaminhada com urgência para o Laboratório Central de Saúde Pública (Lacen).')
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: 'Confirmação', value: "• Para confirmar a doença, é necessário realizar exames de biologia molecular que detecte o RNA viral. O diagnóstico do coronavírus é feito com a coleta de amostra, que está indicada sempre que ocorrer a identificação de caso suspeito." },
            { name: 'A quem recorrer', value: "• Os casos graves devem ser encaminhados a um Hospital de Referência para isolamento e tratamento. Na Bahia, essa unidade é o Instituto Couto Maia (ICOM). Os casos leves devem ser acompanhados pela Atenção Primária em Saúde (APS) e instituídas medidas de precaução domiciliar." },
                    
            

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);



}