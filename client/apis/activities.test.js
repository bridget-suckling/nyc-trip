import nock from 'nock'

import { apiGetActivities } from './activities'

describe('apiGetActivities', () => {
  it('gets activities', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/activities')
      .reply(200, [{ id: 1 }, { id: 2 }])
    return apiGetActivities().then((activities) => {
      expect(activities).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})
