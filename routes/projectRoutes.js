const express = require('express');

const db = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/:id/actions', (req, res) => {
  db
    .getProjectActions(req.params.id)
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      error: 'The information could not be retrieved.'
    })
})

module.exports = router;