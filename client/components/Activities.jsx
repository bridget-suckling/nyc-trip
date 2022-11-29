import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { apiDeleteActivity } from '../apis/activities'
import { fetchLocationsAndActivities } from '../apis/locations'
import DeleteActivity from './DeleteActivity'
import ActivityForm from './ActivityForm'
import Locations from './Locations'
import Type from './Type'
import Time from './Time'
import Swal from 'sweetalert2'

function Activities() {
  const [activities, setActivities] = useState([])
  const [filterId, setFilterId] = useState('0')
  const [activityType, setActivityType] = useState(null)
  const [activityTime, setActivityTime] = useState(null)
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
    Swal.fire({
      title: 'Wait a sec...',
      text: 'Are you sure you want to delete this?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          handleDelete(id)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function handleDelete(id) {
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
      <Type onChange={setActivityType} />
      <Time onChange={setActivityTime} />
      <section>
        <br></br>
        <ul>
          {activities
            .filter(
              (activity) =>
                activityType == null ||
                activityType == '' ||
                activity.type === activityType
            )
            .filter(
              (activity) =>
                activityTime == null ||
                activityTime == '' ||
                activity.time === activityTime
            )
            .map((activity) => (
              <li key={activity.id}>
                <a href={activity.url} target="blank">
                  {activity.name}
                </a>
                <> </>
                <ActivityForm activity={activity} locations={locations} />
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
