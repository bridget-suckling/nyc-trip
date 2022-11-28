import React from 'react'
import { useSelector } from 'react-redux'

function Locations(props) {
  const handleChange = props.handleChange

  const locations = useSelector((globalState) => globalState.locations)

  return (
    <>
      <div>
        <label htmlFor="location_id">Location</label>
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
