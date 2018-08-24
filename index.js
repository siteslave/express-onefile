require('dotenv').config();
const Knex = require('knex');

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const fse = require('fs-extra');
const gcm = require('node-gcm');
const jwt = require('./jwt');
const app = express();

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    port: 3307,
    password: '##devmate##',
    database: 'phayao'
  }
});

let checkAuth = (req, res, next) => {
  let token = null;

  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  } else {
    token = req.body.token;
  }

  jwt.verify(token)
    .then((decoded) => {
      req.decoded = decoded;
      next();
    }, err => {
      return res.send({
        ok: false,
        error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
        code: HttpStatus.UNAUTHORIZED
      });
    });
}

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to my api serve!', code: HttpStatus.OK }));

app.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  if (username === 'admin' && password === 'admin') {
    var token = jwt.sign({ username: username });
    res.send({ ok: true, token: token });
  } else {
    res.send({ ok: false, error: 'Invalid username or password!', code: HttpStatus.OK });
  }

});

app.get('/users', checkAuth, (req, res, next) => {
  var jsonData = fse.readJsonSync('./users.json');
  res.send({ ok: true, rows: jsonData, code: HttpStatus.OK });
});

app.post('/fcm/register', checkAuth, (req, res, next) => {
  const tokenDevice = req.body.tokenDevice;
  const email = req.body.email;
  console.log('Device token: ', tokenDevice);
  console.log('Email: ', email);

  var data = { email: email, token_device: tokenDevice };

  knex('users').insert(data)
    .then(() => {
      res.send({ ok: true, tokenDevice: tokenDevice, email: email });
    }).catch((error) => {
      res.send({ ok: false, error: error });
    });

});

app.get('/fcm/users', checkAuth, (req, res, next) => {

  knex('users').select()
    .then((rows) => {
      res.send({ ok: true, rows: rows });
    }).catch((error) => {
      res.send({ ok: false, error: error });
    });

});

app.post('/fcm/send', checkAuth, (req, res, next) => {

  const msg = req.body.msg;
  const tokenDevice = req.body.tokenDevice;
  const title = req.body.title;

  console.log(req.body);

  if (msg && tokenDevice) {

    const sender = new gcm.Sender(process.env.SENDER_KEY);
    const message = new gcm.Message({
      contentAvailable: true,
      notification: {
        title: title || "ทดสอบ",
        body: msg,
        sound: "true",
      }
    });

    const registrationTokens = tokenDevice.split(',');
    // registrationTokens.push(tokenDevice);

    sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {
      if (err) {
        console.error(err);
        res.send(err);
      }
      else {
        console.log(response);
        res.send(response);
      };
    });

  } else {
    res.send({ ok: false, error: 'ข้อมูลไม่ครบ' });
  }

});

//error handlers
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: {
        ok: false,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
      }
    });
  });
}

app.use((req, res, next) => {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      ok: false,
      code: HttpStatus.NOT_FOUND,
      error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));