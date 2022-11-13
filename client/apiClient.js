import request from 'superagent'
const locationsURL = '/api/v1/locations'
const activitiesURL = '/api/v1/activities'

export function apiGetLocations() {
  return request.get(locationsURL).then((response) => {
    return response.body
  })
}

export function apiGetActivities() {
  return request.get(activitiesURL).then((response) => {
    return response.body
  })
}

export function apiGetActivitiesAtLocation(location) {
  return request
    .get(locationsURL)
    .where('location', location)
    .then((response) => {
      return response.body
    })
}

export function apiAddActivity(form) {
  return request
    .post(activitiesURL)
    .send(form)
    .then((res) => {
      const location = res.body.location
      return location
    })
    .then((location) => {
      return apiGetActivitiesAtLocation(location)
    })
}
