import nock from 'nock'

import {
  apiGetActivities,
  apiAddActivity,
  apiUpdateActivity,
  apiDeleteActivity,
} from './activities'

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

describe('apiAddActivity', () => {
  it('adds a new activity', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/activities')
      .reply(200, { name: 'Empire State Building' })
    return apiAddActivity().then((activity) => {
      expect(activity.name).toBe('Empire State Building')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('apiUpdateActivity', () => {
  it('updates an existing activity', () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/activities')
      .reply(200, { id: 1, name: 'Met Museum', cost: '$50' })
    return apiUpdateActivity().then((activity) => {
      expect(activity.cost).toBe('$50')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('apiDeleteActivity', () => {
  it('deletes an activity', () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/activities')
      .reply(200, { id: 1 })
    return apiDeleteActivity([1]).then((activity) => {
      expect(activity.id).toBe(1)
      expect(scope.isDone()).toBe(true)
    })
  })
})
