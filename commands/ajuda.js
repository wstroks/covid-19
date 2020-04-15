const config    = require("../config.json");
const commands  = require("../scripts/commandReader")(config.prefix);
const permissions = config.permissions;

const descriptions = {
    "!ajuda": "Use esse comando para ver os comandos disponiveis",
    "!aviso": "Avise as pessoas do server",
    "!clear": "Limpe o chat",
    "!ping":  "Pingue o bot"
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