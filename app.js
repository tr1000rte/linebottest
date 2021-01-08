const express = require('express');
const line = require('@line/bot-sdk');


require('dotenv').config();

const client = new line.Client({
    channelAccessToken: '2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU='
  });

const message = {
     type: 'text',
    text: 'Hello World!'
};

client.replyMessage('<replyToken>', message)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
const linebotParser = bot.parser();




app.post('/', linebotParser);
app.listen(process.env.PORT || 3000, () => {
    console.log('BOT已準備就緒');
});

