'use strict';

const express = require('express');
const volleyball = require('volleyball');
const path = require('path');

const app = express();

app.use(volleyball);

app.use('/public', express.static(__dirname));
// serve static files from public
app.use('/public', express.static(path.join(__dirname, 'public')));

// request any page and receive index.html
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

var PORT = process.env.PORT || 1337

app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});
