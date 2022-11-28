require('dotenv').config()
const request = require('superagent')
const express = require('express')
const apiKey = process.env.API_KEY
const router = express.Router()

router.get('/', (req, res) => {
  request
    .get(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9781,40.7511,11.03,0/300x400?access_token=${apiKey}`
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
