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
      <h2>Locations:</h2>
      <ul>
        {locations &&
          locations.map(({ id, name }) => {
            return <li key={id}>{name}</li>
          })}
      </ul>
    </div>
  )
}

export default Locations
