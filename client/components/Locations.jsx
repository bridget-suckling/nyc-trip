import React from 'react'
import { apiGetActivitiesAtLocation } from '../apiClient'

function Locations(props) {
  const locations = props.locations

  function handleChange(event) {
    const id = event.target.value
    apiGetActivitiesAtLocation(id)
      .then((response) => {
        console.log('response', response)
      })
      .catch((e) => console.error(e))
  }

  return (
    <>
      <div>
        <label htmlFor="location_id">Location: </label>
        <select
          type="text"
          name="location_id"
          id="location_id"
          onChange={handleChange}
          value={locations.location_id}
        >
          <option value="">--- Select location ---</option>
          {props.locations &&
            props.locations.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
      </div>
    </>
  )
}

export default Locations
