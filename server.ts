const express = require('express');
const mysql = require('mysql')

const app = express();

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

connection.connect(function (error: any) {
  if(!!error){
    console.log('Error');
  } else {
    console.log('connected');
  }
})

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

app.get('/users', (req: any, res: any) => {
  connection.query("select * from user", function (error: any, rows: any, fields: any) {
    if(!!error){
      console.log('Query error');
    } else {
      res.send(rows);
    }
  });
});

app.get('/messages',(req: any, res: any)=>{
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

const PORT = process.env.PORT || 4201
app.listen(PORT, function () {
  console.log('Server Listening on '+PORT);
});
