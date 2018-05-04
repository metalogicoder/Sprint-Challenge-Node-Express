const cors = require('cors');
const express = require('express');

const server = express();
const projectRoutes = require('./routes/projectRoutes');

server.use(cors());
server.use(express.json());
server.use('/api/projects', projectRoutes);

const db = {
  actions: require('./data/helpers/actionModel'),
  projects: require('./data/helpers/projectModel')
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

// delete specific element of target in database
server.delete('/api/:target/:id', (req, res) => {
  db[req.params.target]
    .remove(req.params.id)
    .then(numOfDeletedItems => {
      res.json(numOfDeletedItems);
    })
    .catch(err => {
      res.status(500).json({
        error: 'The data could not be deleted'
      });
    });
});

server.listen(5000, console.log('\n== API Running on port 5000 ==\n'));