const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllLocations()
    .then((locations) => {
      res.json(locations)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  console.log('router', id)
  db.getActivitiesByLocation(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
