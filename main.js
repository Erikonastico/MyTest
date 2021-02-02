//Dependencies//
const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');

//Discord Login//
client.login('ODA2MjU0ODYwODg1ODE5NDM0.YBmxWg.eB5fL48TEtZILiffwuT9HTpverg');

client.once('ready', () => {
    console.log("The code has started!");
})

client.on('message', message => {
    if (message.content == '!verifyCanvas') {
        let canvas = Canvas.createCanvas(256,256);
        let ctx = canvas.getContext('2d');
        ctx.fillRect(0,0,188,188);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Setor.png');
        message.channel.send(attachment);
    }    
})