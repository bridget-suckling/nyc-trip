import request from 'superagent'
const locationsUrl = '/api/v1/locations'
const activitiesUrl = '/api/v1/activities'

export function apiGetLocations() {
  return request.get(locationsUrl).then((response) => {
    return response.body
  })
}

export function apiGetActivities() {
  return request.get(activitiesUrl).then((response) => {
    return response.body
  })
}

export function apiGetActivity(id) {
  return request
    .get(activitiesUrl)
    .where('id', id)
    .then((response) => {
      return response.body
    })
}

export function apiGetActivitiesAtLocation(location) {
  return request
    .get(locationsUrl)
    .where('location', location)
    .then((response) => {
      return response.body
    })
}

export function apiAddActivity(form) {
  return request
    .post('/api/v1/activities')
    .send(form)
    .then((res) => {
      return res.body
    })
}

export function apiUpdateActivity(id, updatedActivity) {
  return request
    .patch('/api/v1/activities/:id')
    .send(id, updatedActivity)
    .then((res) => {
      return res.json('updated')
    })
}

export function apiDeleteActivity(id) {
  return request
    .delete('/api/v1/activities/')
    .send(id)
    .then((res) => res.body)
}
