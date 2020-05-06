module.exports = async (client, msg, args) => {

    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("O que posso fazer para me proteger e evitar transmitir para outras pessoas?")
        .setURL("https://www.paho.org/bra/index.php?option=com_content&view=article&id=6101:covid19&Itemid=875")
        .setDescription('A maioria das pessoas infectadas experimenta uma doença leve e se recupera, mas pode ser mais grave para outras pessoas. Mantenha-se informado sobre os últimos desenvolvimentos a respeito da COVID-19 e faça o seguinte para cuidar da sua saúde e proteger a dos outros:')
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: '1', value: "Lave as mãos com água e sabão ou higienizador à base de álcool, para matar vírus que podem estar nas suas mãos." },
            { name: '2', value: "Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando. Quando alguém tosse ou espirra, pulveriza pequenas gotas líquidas do nariz ou da boca, que podem conter vírus. Se você estiver muito próximo, poderá inspirar as gotículas – inclusive do vírus da COVID-19 se a pessoa que tossir tiver a doença." },
            { name: '3', value: "Evite tocar nos olhos, nariz e boca. As mãos tocam muitas superfícies e podem ser infectadas por vírus. Uma vez contaminadas, as mãos podem transferir o vírus para os olhos, nariz ou boca. A partir daí, o vírus pode entrar no corpo da pessoa e deixá-la doente." },
            { name: '4', value: "Certifique-se de que você e as pessoas ao seu redor seguem uma boa higiene respiratória. Isso significa cobrir a boca e o nariz com a parte interna do cotovelo ou lenço quando tossir ou espirrar (em seguida, descarte o lenço usado imediatamente). Gotículas espalham vírus. Ao seguir uma boa higiene respiratória, você protege as pessoas ao seu redor contra vírus responsáveis por resfriado, gripe e COVID-19." },
            { name: '5', value: "Pessoas doentes devem adiar ou evitar viajar para as áreas afetadas por coronavírus. Áreas afetadas são países, áreas, províncias ou cidades onde há transmissão contínua -- não áreas com apenas casos importados." },
            { name: '6', value: "Fique em casa se não se sentir bem. Se você tiver febre, tosse e dificuldade em respirar, procure atendimento médico. Siga as instruções da sua autoridade sanitária nacional ou local, porque elas sempre terão as informações mais atualizadas sobre a situação em sua área." },
            { name: '7', value: "Os viajantes que retornam das áreas afetadas devem monitorar seus sintomas por 14 dias e seguir os protocolos nacionais dos países receptores; e se ocorrerem sintomas, devem entrar em contato com um médico e informar sobre o histórico de viagem e os sintomas." },
                      
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');

    msg.author.send(exampleEmbed);

}

