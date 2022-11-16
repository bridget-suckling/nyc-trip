import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import AddActivityForm from './AddActivityForm'
// const [activities, setActivities] = useState([])

// useEffect(() => {
//   apiGetActivities()
//     .then((activitiesData) => {
//       setActivities(activitiesData)
//       console.log(activities)
//     })
//     .catch((e) => {
//       console.log(e)
//     })
// }, [])
// function handleAddActivity(newActivity) {
//   if (activities.includes(newActivity)) return
//   const newActivities = [...activities, newActivity]
//   setActivities(newActivities)
// }
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
      {/* <AddActivityForm activities={activities} /> */}
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
