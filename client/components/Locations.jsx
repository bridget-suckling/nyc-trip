import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocationsAction } from '../Actions/index'

function Locations(props) {
  // const locations = props.locations
  const handleChange = props.handleChange

  // const locations = useSelector((state) => state.locations)
  const locations = useSelector((globalState) => globalState.locations)
  console.log(locations)

  return (
    <>
      <div>
        <label htmlFor="location_id">View activities by location</label>
        <br></br>
        <select
          className="largeinput"
          type="text"
          name="location_id"
          id="location_id"
          onChange={handleChange}
          value={locations.location_id}
        >
          <option value="0">--- Select location ---</option>
          {locations &&
            locations.map(({ id, name }) => (
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
