const express = require('express');
const line = require('@line/bot-sdk');
const app = express();

const config = {
    channelAccessToken: '2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '7d99742ecd726beea928c780f7491a20',
    channelID: '1655554384'
  };

const client = new line.Client({
  channelAccessToken: '<channel access token>'
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

client.replyMessage('<replyToken>', message)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = app;