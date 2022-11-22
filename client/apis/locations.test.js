import nock from 'nock'

import { fetchLocations, fetchLocationsAndActivities } from './locations'

describe('fetchLocations', () => {
  it('fetches all locations', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/locations')
      .reply(200, [
        { id: 1, name: 'Upper West Side' },
        { id: 2, name: 'Upper East Side' },
      ])
    return fetchLocations().then((locations) => {
      expect(locations).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})

// describe('fetchLocationsAndActivities', () => {
//   it('gets all the activities at a location', () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/locations')
//       .reply(200, [
//         { id: 1, name: 'Upper West Side' },
//         { id: 2, name: 'Upper East Side' },
//       ])
//     return fetchLocationsAndActivities(1).then(() => {
//       expect(location).toBe('Upper West Side')
//       expect(scope.isDone()).toBe(true)
//     })
//   })
// })
