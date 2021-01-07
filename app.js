const express = require('express');
const linebot = require('linebot');

const bot = linebot({
    // channelId: CHANNEL_ID,
    // channelSecret: CHANNEL_SECRET,
    // channelAccessToken: CHANNEL_ACCESS_TOKEN
    channelId: '1655554384',
    channelSecret: '7d99742ecd726beea928c780f7491a20',
    channelAccessToken: '2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU='
});

const app = express();
const linebotParser = bot.parser();

bot.on('message', function(event) {
    console.log(event);
    if (event.message.text = "123") {
        event.reply('TEST');
    }
});

app.post('/', linebotParser);
app.listen(process.env.PORT || 3000, () => {
    console.log('[BOT已準備就緒]');
});

