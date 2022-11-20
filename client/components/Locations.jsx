import React from 'react'

function Locations(props) {
  const locations = props.locations
  const handleChange = props.handleChange

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
