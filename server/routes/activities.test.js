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

  test('returns 500 and logs error message when error', () => {
    db.getAllActivities.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/activities')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('post /api/v1/activities', () => {
  test('posts a new activity in json', () => {
    const fakeActivity = { name: 'Empire State Building' }
    db.addActivity.mockReturnValue(Promise.resolve([1]))
    db.getActivity.mockReturnValue(Promise.resolve({ ...fakeActivity, id: 1 }))
    return request(server)
      .post('/api/v1/activities')
      .send(fakeActivity)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('Empire State Building')
      })
  })
  test('returns 500 and logs error message when error', () => {
    db.addActivity.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .post('/api/v1/activities')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('delete /api/v1/activities', () => {
  test('deletes an activity in json', () => {
    db.deleteActivity.mockReturnValue(Promise.resolve())
    return request(server)
      .delete('/api/v1/activities')
      .send({ id: 1 })
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.text).toBe('"deleted"')
      })
  })
  test('returns 500 and logs error message when error', () => {
    db.deleteActivity.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .delete('/api/v1/activities')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('patch /api/v1/activities', () => {
  test('updates an activity in json', () => {
    const fakeActivity = { id: 1, cost: '$50' }
    db.updateActivity.mockReturnValue(Promise.resolve())
    return request(server)
      .patch('/api/v1/activities')
      .send(fakeActivity)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.text).toBe('"updated"')
      })
  })
  test('returns 500 and logs error message when error', () => {
    db.updateActivity.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .patch('/api/v1/activities')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
