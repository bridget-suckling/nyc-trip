require('dotenv').config()
const request = require('superagent')
const express = require('express')
const apiKey = process.env.API_KEY
const router = express.Router()

router.get('/', (req, res) => {
  request
    .get(
      `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/12/1171/1566.mvt?style=mapbox://styles/mapbox/streets-v12@00&access_token=${apiKey}`
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
