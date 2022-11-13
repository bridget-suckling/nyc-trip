import React, { useState, useEffect } from 'react'
import { apiGetLocations } from '../apiClient'

function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    apiGetLocations()
      .then((locationsData) => {
        setLocations(locationsData)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <div>
      <ul>
        {locations &&
          locations.map(({ id, name, code, neighbours }) => {
            return (
              <li key={id}>
                Name: {name} Code: {code} Neighbours: {neighbours}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Locations
