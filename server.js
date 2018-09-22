/* @flow */
const path = require('path');
const express = require('express');
// const favicon = require('serve-favicon');
// $FlowFixMe
const fallback = require('express-history-api-fallback');
const server = express();
const config = require('./config.json');

server.disable('x-powered-by');

// server.use(favicon(path.join(__dirname, 'favicon.ico')));
server.use(express.static(__dirname + '/dist'));
server.use(fallback('index.html', { root: __dirname + '/dist' }));
server.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

server.listen(config.port, () => console.log(`Server listening on port ${config.port}...`));