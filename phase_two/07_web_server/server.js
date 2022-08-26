const express = require('express');
const app = express();
const port = 3000;

let counter = 0

app.get('/', (req, res) => {
  res.send('One is not amused')
});

app.post('/counter', (req, res) => {
  counter++
  res.send('Increment the counter')
});

app.get('/counter', (req, res) => {
  res.send(`Counter is at: ${counter}`)
});

app.delete('/counter', (req, res) => {
  counter = 0
  res.send('Reset counter to zero')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
