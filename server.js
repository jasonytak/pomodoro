const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./models/userController');

const app = express();
const PORT = process.env.PORT || 5000;

const mongoDB = 'mongodb://test:test123@ds145563.mlab.com:45563/pomodoro';

mongoose.connect(mongoDB).then(() => console.log('CONNECTED'));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', userController.saveAndFind);

app.get('/time', (req, res) => {
  res.locals.seconds = new Date().getMinutes() * 60 + new Date().getSeconds();
  res.send(res.locals);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/server', (req, res) => {
  res.send({ express: 'YOUR BACKEND IS CONNECTD' });
});
