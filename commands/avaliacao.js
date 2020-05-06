module.exports = async (client, msg, args, database) => {
    const Discord = require("discord.js");
    var textoMsg = "";
    
    var comentario = "";
    var avaliacao = "";
    var alarme2 = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i] == "n") {
            alarme2 = i;

        }

    }

    for (var i = 2; i < alarme2; i++) {
        if (i == (alarme2 - 1)) {
            comentario += args[i];
        } else {
            comentario += args[i] + " ";
        }

    }
    for (var i = alarme2 + 1; i < args.length; i++) {
        if (i == (alarme2 - 1)) {
            avaliacao += args[i];
        } else {
            avaliacao += args[i] + " ";
        }

    }
    const rooRef = database.ref('feedback');

    const autoId = rooRef.push().key;
    rooRef.child(autoId).set({
        comentario: comentario,
        nota: avaliacao


    });

    msg.channel.send(`Obrigado pela avaliação!!`);
}



