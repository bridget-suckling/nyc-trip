import React, { useState, useEffect } from 'react'
import { apiGetActivitiesAtLocation, apiDeleteActivity } from '../apiClient'
import DeleteActivity from './DeleteActivity'
import AddActivityForm from './AddActivityForm'
import Locations from './Locations'

function Activities(props) {
  const [activities, setActivities] = useState([])
  const [filterId, setFilterId] = useState('0')

  useEffect(() => {
    apiGetActivitiesAtLocation(filterId)
      .then((activitiesData) => {
        setActivities(activitiesData)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [filterId])

  function handleDeleteButton(id) {
    apiDeleteActivity(id)
      .then(() => apiGetActivitiesAtLocation(filterId))
      .then((activitiesData) => {
        setActivities(activitiesData)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  function handleChange(event) {
    const id = event.target.value
    setFilterId(id)
  }

  return (
    <>
      <br></br>
      <Locations locations={props.locations} handleChange={handleChange} />
      <h2>Activities:</h2>
      <section>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <a href={activity.url} target="blank">
                {activity.name}
              </a>
              <em> ({activity.type})</em>
              <> </>
              <AddActivityForm
                activity={activity}
                locations={props.locations}
              />
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
