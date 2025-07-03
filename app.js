const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/infor', (req, res) => {
  res.sendFile(__dirname + '/public/infor.html');
});

app.get('/shop', (req, res) => {
  res.sendFile(__dirname + '/public/shop.html');
});

app.get('/banhdonglanh', (req, res) => {
  res.sendFile(__dirname + '/public/banhdonglanh.html');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
