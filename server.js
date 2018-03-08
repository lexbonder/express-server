const express = require('express');
const app = express();
const path = require('path');
const user = require('./public/user');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url)
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger)

app.use(express.static('public'))

app.get('/json', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/user.json'));
});

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/sunsets.html'))
})

app.post('/', (request, response) => {
  response.status(200).json({"words": "YOU DID THE THING!!!!!"})
})

app.use((request, response, next) => {
  response.status(404).send('Oh Noes!! The thing is not there!!')
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

