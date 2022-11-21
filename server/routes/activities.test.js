const request = require('supertest')
const server = require('../server')
const db = require('../db/db')
// const { test } = require('../db/knexfile')

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

// describe('post /api/v1/activities', () => {
//   test('posts a new activity in json', () => {
//     const fakeActivity = { name: 'Empire State Building' }
//     db.addActivity.mockReturnValue(Promise.resolve(fakeActivity))
//     return request(server)
//       .get('/api/v1/activities')
//       .then((res) => {
//         expect(res.body).toBe('Empire State Building')
//       })
//   })
// })

// describe('delete /api/v1/activities', () => {
//   test('deletes an activity in json', () => {
//     const fakeActivity = { id: 1 }
//     db.deleteActivity.mockReturnValue(Promise.resolve(fakeActivity))
//     return request(server)
//       .get('/api/v1/activities')
//       .then((res) => {
//         expect(res.body).toHaveLength(0)
//       })
//   })
// })

// describe('patch /api/v1/activities', () => {
//   test('updates an activity in json', () => {
//     const fakeActivity = { id: 1, cost: '$50' }
//     db.updateActivity.mockReturnValue(Promise.resolve(fakeActivity))
//     return request(server)
//       .get('/api/v1/activities')
//       .then((res) => {
//         console.log(res.body)
//         expect(res.body.cost).toBe('$50')
//       })
//   })
// })
