const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./models/userController');

const app = express();
const port = process.env.PORT || 5000;

const mongoDB = 'mongodb://test:test123@ds145563.mlab.com:45563/pomodoro';

mongoose.connect(mongoDB).then(() => console.log('CONNECTED'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', userController.saveAndFind);

app.get('/time', (req, res) => {
  const dateTime = new Date();
  res.send(dateTime);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/server', (req, res) => {
  res.send({ express: 'YOUR BACKEND IS CONNECTD' });
});
