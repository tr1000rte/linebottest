const express = require('express');
const line = require('@line/bot-sdk');
const app = express();

const config = {
    channelAccessToken: '2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '7d99742ecd726beea928c780f7491a20'
  };


  app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
  });
  
  const client = new line.Client(config);
  function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }
  
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: event.message.text
    });
  }
  
  app.listen(process.env.PORT || 8080, () => {
      console.log('Bot啟動中');
  });

