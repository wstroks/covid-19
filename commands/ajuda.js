const config    = require("../config.json");
const commands  = require("../scripts/commandReader")(config.prefix);
const permissions = config.permissions;

const descriptions = {
    "!ajuda": "Use esse comando para ver os comandos disponíveis;",
    "!atendimento": "Número de contato para atendimento sobre o COVID-19;",
    "!brasil-covid19": "Informações sobre casos do COVID-19 no Brasil;",
    "!cidade-covid19": "Descubra quantos casos há em sua cidade. Uso: <!cidade-covid19 cidade-sigla do estado>. Exemplo: <!cidade-covid19 feira de santana-ba>;",
    "!diagnostico": "Informações sobre o diagnóstico do COVID-19;",
    "!estado-covid19": "Descubra quantos casos há em sua cidade. Uso: <!estado-covid19 sigla do estado>. Exemplo: <!estado-covid19 ba>;",
    "!fakenews": "Número para verificar a veracidade de informações relacionadas ao COVID-19;",
    "!fiqueemcasa": "Faça parte da campanha #fiqueemcasa;",
    "!global-covid19": "Informações globais sobre casos relacionados ao COVID-19;",
    "!historia": "Como surgiu o COVID-19;",
    "!medico": "Descubra onde encontrar médicos em sua cidade.  Uso: <!medico p tipo de médico l cidade-estado>. Exemplo: <!medico p médico clínico geral l feira de santana-ba>;",
    "!prevencao": "Informações sobre como se previnir do COVID-19;",
    "!rendabasica": "Informações sobre como o projeto Renda Básica do COVID-19;",
    "!transmissao": "Informações sobre formas de transmissão do COVID-19;",
    "!tratamento": "Informações sobre o tratamento do COVID-19;",
};


module.exports = (client,msg) =>{
    var texto = "Comandos:";
    Object.keys(commands).forEach(command => {
        if(permissions[command]){
            if(msg.member.hasPermission(permissions[command])) texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}`
        }else texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}`
    });
    msg.reply(texto);
};