const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const commands = require("./scripts/commandReader")(config.prefix);


const unknowCommand = require("./scripts/unknowCommand");

const permissions = config.permissions;
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyA2t6gBW4qcEyl_zdThNXOuiaNr_ayEqxo",
    authDomain: "joaobot.firebaseapp.com",
    databaseURL: "https://joaobot.firebaseio.com",
    projectId: "joaobot",
    storageBucket: "joaobot.appspot.com",
    messagingSenderId: "1077481574661",
    appId: "1:1077481574661:web:99010ba973bb3bd083676c",
    measurementId: "G-8BW2WD60W9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const database = firebase.database();

client.on("ready", () => {
    console.log(`Logando com o bot ${client.user.tag}`);

    let status = [
        { name: "Olá Pessoal!", type:"PLAYING" },
        { name: "Baixe o nosso app e aprenda sobre dislexia!", type:"WATCHING" },
        { name: `${client.users} pessoas`, type:"PLAYING"},
        { name: `Bot sendo desenvolvido`, type:"STREAMING", url:"https://play.google.com/store/apps/details?id=org.godotengine.joao"},
    ];

    function setStatus(){
        let radomStatus = status[Math.floor(Math.random()*status.length)];
        client.user.setPresence({game:radomStatus});

    }
    setStatus();
    setInterval(()=> setStatus(),5000);
});

client.on("message", (msg) => {
    if (!msg.author.bot && msg.guild) {
        if("Ola"== msg.content){
            //msg.author.send("aii");
           // msg.author.send("OI", { tts: true })
           msg.channel.send('Oi tudo bem?');
        }
        if (config.debug) console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        //console.log("aqui"+args+" "+args.length);
        if (commands[args[0]]) {
            if (permissions[args[0]]) {
                if (msg.member.hasPermission(permissions[args[0]])) commands[args[0]](client, msg);
                else msg.reply(`Você não tem permissão para executar esse comando`);
            } else commands[args[0]](client, msg,args,database);
        }
        else if (args[0].split("")[0] == config.prefix) unknowCommand(client, msg);
    }
});

client.on("guildMemberAdd", (member) => {
    const boasVindasChannel = member.guild.channels.cache.find(channel => channel.id == config.boasVindasChannelId);
    boasVindasChannel.send(`${member.user} acabou de entrar em nosso servidor :P yey`);
    member.send("Bem vindo ao nosso servidor\nSe divirta 😃");
});
client.on("guildMemberRemove", (member) => {
    const boasVindasChannel = member.guild.channels.cache.find(channel => channel.id == config.boasVindasChannelId);
    boasVindasChannel.send(`${member.user} saiu do server :( awwww 😔`);
});

client.login(config.token);