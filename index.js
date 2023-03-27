import express from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import {getBing_chat} from "./bingchat.js"

const app = express();
app.set('x-powered-by', false)
app.use(express.json())
// 配置中间件
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/bing',getBing_chat);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Start service success! listening port: http://127.0.0.1:' + port);
})