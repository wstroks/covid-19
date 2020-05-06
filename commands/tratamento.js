module.exports = async (client, msg, args) => {
 
    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Tratamento para o Covid-19")
        .setURL("http://www.saude.ba.gov.br/temasdesaude/coronavirus/")
        .setDescription("No primeiro sinal dos sintomas, procure orientação médica (NÃO SE AUTO MEDIQUE).\nNão existe tratamento específico para infecções causadas por coronavírus humano. É indicado repouso e consumo de bastante água, além de algumas medidas adotadas para aliviar os sintomas, conforme cada caso, como, por exemplo:")
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
         
            { name: 'Não se auto medique', value: "Uso de medicamento para dor e febre (antitérmicos e analgésicos);"},
            { name: 'Alivio', value: "Uso de umidificador no quarto ou tomar banho quente para auxiliar no alívio da dor de garanta e tosse." },
            { name: 'Sintomas', value: "Assim que os primeiros sintomas surgirem, é fundamental procurar ajuda médica imediata para confirmar diagnóstico e iniciar o tratamento. Todos os pacientes que receberem alta durante os primeiros 7 dias do início do quadro (qualquer sintoma independente de febre), devem ser alertados para a possibilidade de piora tardia do quadro clínico e sinais de alerta de complicações, como: aparecimento de febre (podendo haver casos iniciais sem febre), elevação ou reaparecimento de febre ou sinais respiratórios, taquicardia (aumento dos batimentos cardíacos), dor pleurítica (dor no peito), fadiga (cansaço) e dispneia (falta de ar)." },
          
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');

    msg.author.send(exampleEmbed);

}
