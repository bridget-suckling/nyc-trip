import React, { useState, useEffect } from 'react'
import { apiGetActivities, apiDeleteActivity } from '../apiClient'
import UpdateActivities from './UpdateActivities'
import DeleteActivity from './DeleteActivity'

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

  function handleDeleteButton(id) {
    apiDeleteActivity(id)
      .then(() => apiGetActivities())
      .then((activitiesData) => {
        setActivities(activitiesData)
      })
      .catch((e) => {
        console.log(e)
      })
  }

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
              <UpdateActivities activities={activities} />
              <DeleteActivity
                handleDeleteButton={handleDeleteButton}
                activityId={id}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Activities
