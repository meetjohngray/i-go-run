const express = require('express')
const router = express.Router()

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  db.getExamples()
    .then(list => {
      res.json(list)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
