module.exports = async (client, msg, args, database) => {
    const Discord = require("discord.js");
    var textoMsg = "";





    var reference = database.ref('emcasa');
    reference.orderByChild("Contador").once("value").then(function (snapshot) {
        var contador = 0;
        textoMsg = "";
        snapshot.forEach(function (data) {
            var a =data.val().contador+1; 
            textoMsg=a;
            data1 ={
       
               contador:a
                
                }
            // inHTML("ex-table1","");    
            
             database.ref('emcasa/'+data.key).update(data1);





        });

      


        msg.channel.send(`${textoMsg} pessoas estão pedindo para que você fique em casa. Então siga essa orientação!!`);
    });








}



