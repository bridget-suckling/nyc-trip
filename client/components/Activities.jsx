import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'

function Activities() {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    apiGetActivities()
      .then((activitiesData) => {
        setActivities(activitiesData)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <>
      <h1>Activities:</h1>
      <section>
        <ul>
          {activities.map(({ id, name, type, url }) => (
            <li key={id}>
              <a href={url} target="blank">
                {name}
              </a>
              <em> ({type})</em>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Activities
