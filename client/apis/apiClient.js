import request from 'superagent'
// const locationsUrl = '/api/v1/locations'
const activitiesUrl = '/api/v1/activities'

// export function apiGetLocations() {
//   return request.get(locationsUrl).then((res) => res.body)
// }

export function apiGetActivities() {
  return request.get(activitiesUrl).then((res) => res.body)
}

export function apiGetActivity(id) {
  return request
    .get(activitiesUrl)
    .where('id', id)
    .then((res) => res.body)
}

export function apiGetActivitiesAtLocation(id) {
  return request.get(`/api/v1/locations/${id}`).then((res) => res.body)
}

export function apiAddActivity(form) {
  return request
    .post('/api/v1/activities')
    .send(form)
    .then((res) => res.body)
}

export function apiUpdateActivity(updatedActivity) {
  return request
    .patch('/api/v1/activities')
    .send(updatedActivity)
    .then((res) => res.body)
}

export function apiDeleteActivity(id) {
  return request
    .delete('/api/v1/activities')
    .send(id)
    .then((res) => res.body)
}
