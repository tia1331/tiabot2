const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODI1NDcwMTIwODA0NjE0MTg2.YF-Y9Q.Tn-TxN4maJI1TLTRO1093tEVbqo');


var messaggi = ["dio porco", "dio cane", "dio stronzo", "dio maiale"]

client.on('message', (message) => {
	if (message.content == '!comando') {
        var random  = Math.floor(Math.random() * messaggi.length)
        message.channel.send(message.author.toString() + " " + messaggi[random]);
	}
});



client.on('message', (message) => {
    if (message.content == '.coglione') {
        message.channel.send("sono un coglione")
    }
});

var prova = ["fhasnfaoi", "njsd", "jdjd","apapa"]

client.on("message", (message) => {
    if (message.content == ".umbe") {
        message.channel.send("ciao <@522778219061968897>")
    }
});

