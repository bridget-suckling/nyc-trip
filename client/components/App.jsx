import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import Home from './Home'
import Locations from './Locations'

function App() {
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

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:name" element={<Locations />} />
      </Routes>
      <h2>{'Add an Activity here:'}</h2>
      {/* <AddActivityForm activities={activities} /> */}
      <h2>{'Activities:'}</h2>
      <Activities />
    </main>
  )
}

export default App
