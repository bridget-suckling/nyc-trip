const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllLocations,
  getLocationById,
  getActivitiesByLocation,
  getAllActivities,
  getActivity,
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
  return db('locations').where('locations.id', id).select().first()
}

// returns list of activities and their locations
function getActivitiesByLocation(locationId, db = connection) {
  console.log(locationId)
  return db('activities').where('activities.location_id', locationId).select()
}

// gets all activities
function getAllActivities(db = connection) {
  return db('activities').select()
}

// gets an activity
function getActivity(id, db = connection) {
  return db('activities').where('id', id).select().first()
}

// updates an activity
function updateActivity(id, updatedActivity, db = connection) {
  return db('activities').where('id', id).update(updatedActivity)
}

// adds a new activity
function addActivity(newActivity, db = connection) {
  return db('activities').insert(newActivity)
}

// deletes an activity
function deleteActivity(id, db = connection) {
  return db('activities').where('id', id).delete()
}
