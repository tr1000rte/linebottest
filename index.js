const express = require('express');
const linebot = require('linebot');

const bot = linebot({
    // channelId: CHANNEL_ID,
    // channelSecret: CHANNEL_SECRET,
    // channelAccessToken: CHANNEL_ACCESS_TOKEN
    channelId: "1655554384",
    channelSecret: "7d99742ecd726beea928c780f7491a20",
    channelAccessToken: "2HkvdXHtgKmt+wQbiZrcktDU41OG6VUDmJrFeocoBvbNmanbg8Z9entPRfzTQ/wMU1OosIzb+PdYMAf8BVrb30Q3GBcJO9YfWSpML/549ZVWyHI10mJcEVzare8ohgEJDU6/p+IGPHdYpzlQ41XHlwdB04t89/1O/w1cDnyilFU="
});

//收到LINE訊息後印出
bot.on('message', function(event) {
    console.log(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//預設port3000
// app.listen(3000);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });