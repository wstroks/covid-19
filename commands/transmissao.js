module.exports = async (client, msg, args) => {


    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Formas e Transmissão do Covid-19")
        .setURL("http://www.saude.ba.gov.br/temasdesaude/coronavirus/")
        .setDescription("As formas de transmissão do novo coronavírus ainda estão em processo de investigação, mas já se sabe que acontece de pessoa para pessoa. Qualquer pessoa que tenha contato próximo (cerca de 1 metro) com alguém com sintomas respiratórios está em risco de ser exposta à infecção.Alguns vírus são altamente contagiosos (como sarampo), enquanto outros são menos. Ainda não está claro com que facilidade o coronavírus se espalha de pessoa para pessoa, mas já se sabe que a transmissão é menos intensa que do vírus da gripe.")
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
           // { name: 'Comentário de Paciente', value: text5 },
            { name: 'A transmissão dos coronavírus costuma ocorrer por contato pessoal com secreções contaminadas, como:', value: "Gotículas de saliva; \nEspirro; \nTosse; \nCatarro; \nContato pessoal próximo, como toque ou aperto de mão;\n Contato com objetos ou superfícies contaminadas, seguido de contato com a boca, nariz ou olhos.", inline: true },
            { name: 'Recomendação', value: "O período médio de incubação por coronavírus é de 5 dias, com intervalos que chegam a 12 dias, período em que os primeiros sintomas levam para aparecer desde a infecção."},
            { name: 'SARSCoV', value: "A transmissibilidade dos pacientes infectados por SARSCoV é, em média, de 7 dias após o início dos sintomas. No entanto, dados preliminares do coronavírus (SARS-CoV-2) sugerem que a transmissão possa ocorrer mesmo sem o aparecimento de sinais e sintomas. Até o momento, não há informações suficientes de quantos dias anteriores ao início dos sinais e sintomas uma pessoa infectada passa a transmitir o vírus." },
        

           
        )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');


    msg.author.send(exampleEmbed);

}
