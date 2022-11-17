import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import UpdateActivity from './UpdateActivities'

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
        <UpdateActivity activities={activities} />
      </section>
    </>
  )
}

export default Activities
