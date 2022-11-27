const request = require('supertest')
const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get /api/v1/locations', () => {
  test('returns locations in json', () => {
    db.getAllLocations.mockReturnValue(
      Promise.resolve([{ id: 1, name: 'Upper West Side' }])
    )
    return request(server)
      .get('/api/v1/locations')
      .then((res) => {
        expect(res.body).toHaveLength(1)
      })
  })

  test('returns 500 and logs error message when error', () => {
    db.getAllLocations.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/locations')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('get /api/v1/locations/:id', () => {
  test('returns activities at the specified location in json', () => {
    db.getAllActivities.mockReturnValue(
      Promise.resolve([{ id: 1, name: 'Met Museum' }])
    )
    db.getActivitiesByLocation.mockReturnValue(
      Promise.resolve([{ id: 2, name: 'Upper East Side' }])
    )
    return request(server)
      .get('/api/v1/locations/2')
      .then((res) => {
        expect(res.body[0].name).toBe('Upper East Side')
        expect(res.body).toHaveLength(1)
      })
  })
  test('returns all activities if location is not specified', () => {
    db.getAllActivities.mockReturnValue(
      Promise.resolve([
        { id: 1, name: 'Upper West Side' },
        { id: 2, name: 'Upper East Side' },
      ])
    )
    db.getActivitiesByLocation.mockReturnValue(Promise.resolve([{ id: 0 }]))
    return request(server)
      .get('/api/v1/locations/0')
      .then((res) => {
        expect(res.body).toHaveLength(2)
      })
  })

  test('returns 500 and logs error message when error', () => {
    db.getActivitiesByLocation.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/locations/2')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
