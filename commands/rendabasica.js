module.exports = async (client, msg, args) => {

    const Discord = require('discord.js');

    // inside a command, event listener, etc.
    var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Projeto de Lei Renda Básica")
        .setURL("https://epocanegocios.globo.com/Economia/noticia/2020/04/confira-como-pedir-renda-basica-emergencial-de-r-600.html")
        .setDescription("O projeto de lei paga a trabalhadores informais de baixa renda e a beneficiários do Bolsa Família, a renda básica emergencial de R$ 600 ou de R$ 1,2 mil para mães solteiras será depositada de forma automática para quem já está inscrito no Cadastro Único de Programas Sociais (CadÚnico) a partir de quinta-feira (9) e tem conta no Banco do Brasil e na Caixa Econômica Federal. Os demais trabalhadores terão de se cadastrar no aplicativo Caixa Auxílio Emergencial ou no site Auxílio Caixa e começarão a ser pagos até o dia 14.")
        .setThumbnail('https://www.gstatic.com/images/icons/material/system_gm/1x/language_googblue_24dp.png')
        .addFields(
            // { name: 'Comentário de Paciente', value: text5 },
          
             { value: 'NATH FINANÇAS (Video informativo, clique no link) https://www.youtube.com/watch?v=DoDj8gaf3yk', name: "SOU MÃE OU PAI SOLO, POSSO RECEBER O AUXÍLIO DE ATÉ R$ 1.200 POR FAMÍLIA?"},
             { value: 'NATH FINANÇAS (Video informativo, clique no link) https://www.youtube.com/watch?v=dEW6BVcXfnA', name: "PAGAMENTO DO AUXÍLIO EMERGENCIAL - COMO SOLICITAR?" },
                       
         )
        .setTimestamp()
        .setFooter('Clique no titulo e veja mais informações sobre', '');

    msg.author.send(exampleEmbed);

}


