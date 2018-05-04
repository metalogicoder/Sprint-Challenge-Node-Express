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

// add data to target in database
server.post('/api/:target', (req, res) => {
  db[req.params.target]
    .insert(req.body)
    .then(newData => {
      res.status(201).json(newData);
    })
    .catch(err => {
      res.status(500).json({
        error: 'There was an error while saving data to the database'
      });
    });
});

// update specific element of target in database
server.put('/api/:target/:id', (req, res) => {
  db[req.params.target]
    .update(req.params.id, req.body)
    .then(updatedData => {
      res.json(updatedData);
    })
    .catch(err => {
      res.status(500).json({
        error: 'The data could not be updated'
      });
    });
});

server.listen(5000, console.log('\n== API Running on port 5000 ==\n'));