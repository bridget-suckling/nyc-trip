import React, { useState, useEffect } from 'react'
import { apiGetActivities, apiDeleteActivity } from '../apiClient'
import DeleteActivity from './DeleteActivity'
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
          {activities.map((activity) => (
            <li key={activity.id}>
              <a href={activity.url} target="blank">
                {activity.name}
              </a>
              <em> ({activity.type})</em>
              <> </>
              <AddActivityForm activity={activity} />
              <DeleteActivity
                handleDeleteButton={handleDeleteButton}
                activityId={activity.id}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Activities
