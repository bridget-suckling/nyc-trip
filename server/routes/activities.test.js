const request = require('supertest')
const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get /api/v1/activities', () => {
  test('returns activities in json', () => {
    db.getAllActivities.mockReturnValue(
      Promise.resolve([{ id: 1, name: 'Met Museum' }])
    )
    return request(server)
      .get('/api/v1/activities')
      .then((res) => {
        expect(res.body).toHaveLength(1)
      })
  })
})
