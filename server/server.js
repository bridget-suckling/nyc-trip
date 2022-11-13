const path = require('path')
const express = require('express')

// const activities = require('./routes/activities')
const locations = require('./routes/locations')

const server = express()
server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/activities', activities)
server.use('/api/v1/locations', locations)

module.exports = server
