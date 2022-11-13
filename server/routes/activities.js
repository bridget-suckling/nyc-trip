const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getActivitiesByLocation()
    .then((activities) => {
      res.json(activities)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addActivity(req.body)
    .then((newActivityIdArr) => {
      return db.getActivity(newActivityIdArr[0])
    })
    .then((newActivity) => {
      res.json(newActivity)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.deleteActivity(id)
    .then(() => {
      res.json('deleted')
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const activity = req.body
  const id = req.params.id
  db.updateActivity(id, activity)
    .then(() => {
      res.json('updated')
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
