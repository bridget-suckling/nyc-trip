const path = require('path')
const express = require('express')

const activities = require('./routes/activities')
const locations = require('./routes/locations')
const map = require('./routes/map')

const server = express()
server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/activities', activities)
server.use('/api/v1/locations', locations)
server.use('/api/v1/map', map)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
