const { getAllActivities } = require('./db')

const knex = require('knex')
const config = require('./knexfile')
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
