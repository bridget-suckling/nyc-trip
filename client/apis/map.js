import request from 'superagent'

export function apiGetMap() {
  return request.get('/api/v1/map').then((res) => res.body)
}
