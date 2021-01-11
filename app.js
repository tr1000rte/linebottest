const express = require('express');
const line = require('@line/bot-sdk');
const app = express();

const config = {
    channelAccessToken: '2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '7d99742ecd726beea928c780f7491a20',
    channelID: '1655554384'
  };

  app.get('/', (req, res) => res.end(`I'm listening. Please access with POST.`));


  app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch(err => {
        console.log(err);
      })
  });
  
  const client = new line.Client(config);
  function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      //non-text msg ignore
      return Promise.resolve(null);
    }
    
    if(event.message.text ==='test')
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: 'test successfully'
    });

    const echo = { type: 'text', text: event.message.text };
    return client.replyMessage(event.replyToken, echo);

  }
  
  app.listen(process.env.PORT || 8080, () => {
      console.log('Bot啟動中');
  });

  module.exports = app;