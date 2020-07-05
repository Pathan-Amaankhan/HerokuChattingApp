const express = require('express');
const mysql = require('mysql')

const app = express();

let connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'bab8b42fad4e3f',
  password: '1ff11387',
  database: 'heroku_add251950d51535'
});

connection.connect(function (error: any) {
  if(!!error){
    console.log('Error');
  } else {
    console.log('connected');
  }
});

app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
app.use(express.json());

app.get('/undefined/users', (req: any, res: any) => {
  connection.query("select * from user", function (error: any, rows: any, fields: any) {
    if(!!error){
      console.log('Query error');
    } else {
      res.send(rows);
    }
  });
});

app.get('/undefined/messages',(req: any, res: any)=>{
  connection.query(`select * from messages`, function (error: any, rows: any, fields: any) {
    if(!!error){
      console.log('Query error');
    } else {
     res.send(rows);
    }
  });
});

app.get('/messageOfUser',(req: any, res: any)=>{
  connection.query(`select * from messages where user_id=${req.query.id}`, function (error: any,rows: any,fields: any) {
    if(!!error){
      console.log('Query error');
    } else {
      res.send(rows);
    }
  });
});

app.get('/getImage', (req: any, res: any)=>{
  connection.query(`select * from user where id=${req.query.id}`,function (error: any,rows: any,fields: any) {
    if(!!error){
      console.log('Query error');
    } else {
      res.send(rows);
    }
  })
})

app.post('/sendMessage',(req: any, res: any)=>{
  connection.query(`insert into messages(user_id, message, created_at) values (${req.body.id}, '${req.body.message}', current_timestamp);`,function (error: any,rows: any , fields: any) {
    if(!!error){
      console.log('Query Error');
    } else {
      connection.query(`select * from messages where user_id=${req.body.id}`, function (error: any,rows: any,fields: any) {
        if(!!error){
          console.log('Query error');
        } else {
          res.send(rows);
        }
      });
    }
  });
});

app.get('/',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/index.html');
});

app.get('/runtime-es2015.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/runtime-es2015.js');
});

app.get('/polyfills-es2015.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/polyfills-es2015.js');
});

app.get('/styles-es2015.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/styles-es2015.js');
});

app.get('/vendor-es2015.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/vendor-es2015.js');
});

app.get('/main-es2015.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/main-es2015.js');
});

app.get('/runtime-es2015.js.map',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/runtime-es2015.js.map');
});

app.get('/scripts.js',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/scripts.js');
});

app.get('/assets/images/car1.jpeg',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/assets/images/car1.jpeg');
});

app.get('/assets/images/closeButton.png',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/assets/images/closeButton.png');
});

app.get('/assets/images/message-2-16.png',(req: any, res: any)=>{
  res.sendFile(__dirname+'/dist/ChatBotForIntern/assets/images/message-2-16.png');
})

const PORT = process.env.PORT || 4201
app.listen(PORT, function () {
  console.log('Server Listening on '+PORT);
});
