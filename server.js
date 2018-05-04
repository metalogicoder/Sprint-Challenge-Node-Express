const express = require('express');

const server = express();

server.use(express.json());

const db = {
  actions: require('./data/helpers/actionModel'),
  projects: require('./data/helpers/projectModel.js')
}

server.listen(5000, console.log('\n== API Running on port 5000 ==\n'));