const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllLocations,
  getLocationById,
  getActivitiesByLocation,
  updateActivity,
  addActivity,
  deleteActivity,
}
// returns list of locations
function getAllLocations(db = connection) {
  return db('locations').select()
}

// returns a specific location by id
function getLocationById(id, db = connection) {
  return db('locations').where('locations,id', id).select().first()
}

// returns list of activities and their locations
function getActivitiesByLocation(db = connection) {
  return db('activities')
    .join('locations', 'activities.location_id', 'locations.id')
    .where()
    .select()
}

// updates an activity
function updateActivity(id, updatedActivity, db = connection) {
  return db('activities').where('activities.id', id).update({ updatedActivity })
}

// adds a new activity
function addActivity(newActivity, db = connection) {
  return db('activities').insert({ newActivity })
}

// deletes an activity
function deleteActivity(id, db = connection) {
  return db('activities').where('id', id).del()
}
