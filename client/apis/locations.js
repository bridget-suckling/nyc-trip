import request from 'superagent'

export function fetchLocations() {
  return request.get('/api/v1/locations').then((res) => res.body)
}

export function fetchLocationsAndActivities(id) {
  return request.get(`/api/v1/locations/${id}`).then((res) => res.body)
}
