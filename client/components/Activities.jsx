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
    <section>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            {activity.name}
            <em> ({activity.type})</em>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activities
