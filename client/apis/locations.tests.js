import nock from 'nock'

import { fetchLocations, fetchLocationsAndActivities } from './locations'

describe('fetchLocations', () => {
  it('fetches all locations', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/locations')
      .reply(200, { id: 1, name: 'Upper West Side' })
    return fetchLocations().then((locations) => {
      expect(locations).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})
