import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import AddActivityForm from './AddActivityForm'

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
      <AddActivityForm activities={activities} />
      <section>
        <ul>
          {activities.map(({ id, name, type }) => (
            <li key={id}>
              {name}
              <em> ({type})</em>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Activities
