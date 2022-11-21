const {
  getAllActivities,
  getAllLocations,
  getLocationById,
  getActivitiesByLocation,
  getActivity,
  updateActivity,
  addActivity,
  deleteActivity,
} = require('./db')

const knex = require('knex')
const config = require('./knexfile')
const e = require('express')
const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getAllActivities', () => {
  it('returns activities from db', () => {
    return getAllActivities(testDb).then((activities) => {
      expect(activities).toHaveLength(1)
    })
  })
})

describe('getAllLocations', () => {
  it('returns locations from db', () => {
    return getAllLocations(testDb).then((locations) => {
      expect(locations).toHaveLength(52)
    })
  })
})

describe('getLocationById', () => {
  it('gets one location by id', () => {
    return getLocationById(1, testDb).then((location) => {
      expect(location.name).toBe('Upper West Side')
    })
  })
})

describe('getActivitiesByLocation', () => {
  it('gets the activities at a location', () => {
    return getActivitiesByLocation('2', testDb).then((activities) => {
      expect(activities).toHaveLength(1)
    })
  })
})

describe('getActivity', () => {
  it('gets all the activities', () => {
    return getActivity(1, testDb).then((activity) => {
      expect(activity.name).toBe('Met Museum')
    })
  })
})

describe('updateActivity', () => {
  it('updates an activity', () => {
    const updatedActivity = {
      name: 'Met Museum',
      cost: '$50',
    }
    return updateActivity(1, updatedActivity, testDb)
      .then(() => {
        return getActivity(1, testDb)
      })
      .then((activity) => {
        expect(activity.cost).toBe('$50')
      })
  })
})

describe('addActivity', () => {
  it('adds an activity', () => {
    const newActivity = { name: 'Empire State Building' }
    return addActivity(newActivity, testDb)
      .then(() => {
        return getAllActivities(testDb)
      })
      .then((activities) => {
        expect(activities).toHaveLength(2)
        expect(activities[1].name).toBe('Empire State Building')
      })
  })
})

describe('deleteActivity', () => {
  it('deletes an activity from db', () => {
    return deleteActivity(1, testDb)
      .then(() => {
        return getAllActivities(testDb)
      })
      .then((activities) => {
        expect(activities).toHaveLength(0)
      })
  })
})
