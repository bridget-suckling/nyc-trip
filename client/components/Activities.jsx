import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { apiDeleteActivity } from '../apis/apiClient'
import { fetchLocationsAndActivities } from '../apis/locations'
import DeleteActivity from './DeleteActivity'
import AddActivityForm from './AddActivityForm'
import Locations from './Locations'

function Activities() {
  const [activities, setActivities] = useState([])
  const [filterId, setFilterId] = useState('0')
  const locations = useSelector((globalState) => globalState.locations)

  useEffect(() => {
    fetchLocationsAndActivities(filterId)
      .then((activitiesData) => {
        setActivities(activitiesData)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [filterId])

  function handleDeleteButton(id) {
    apiDeleteActivity(id)
      .then(() => fetchLocationsAndActivities(filterId))
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
      <Locations locations={locations} handleChange={handleChange} />
      <section>
        <br></br>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <a href={activity.url} target="blank">
                {activity.name}
              </a>
              <em> ({activity.type})</em>
              <> </>
              <AddActivityForm activity={activity} locations={locations} />
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
