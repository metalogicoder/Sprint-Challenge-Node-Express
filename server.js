const express = require('express');

const server = express();

server.use(express.json());

const db = {
  actions: require('./data/helpers/actionModel'),
  projects: require('./data/helpers/projectModel.js')
}

// get data from target in database
server.get('/api/:target', (req, res) => {
  db[req.params.target]
    .get()
    .then(targetData => {
      res.json(targetData);
    })
    .catch(err => {
      res.status(500).json({
        error: "The information could not be retrieved."
      });
    });
});

server.listen(5000, console.log('\n== API Running on port 5000 ==\n'));