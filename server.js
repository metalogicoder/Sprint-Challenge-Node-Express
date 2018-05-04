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
        error: 'The information could not be retrieved.'
      });
    });
});

// get data from specific element in database using id
server.get('/api/:target/:id', (req, res) => {
  db[req.params.target]
    .get(req.params.id)
    .then(targetElem => {
      res.json(targetElem);
    })
    .catch(err => {
      res.status(404).json({
        error: 'Data with the specified id does not exist.'
      });
    });
});

server.listen(5000, console.log('\n== API Running on port 5000 ==\n'));