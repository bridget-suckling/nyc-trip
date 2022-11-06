import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import AddActivityForm from './AddActivityForm'
// import Nav from './Nav'
import Locations from './Locations'

function App() {
  const [activities, setActivities] = useState([''])

  function handleAddActivity(newActivity) {
    if (activities.includes(newActivity)) return
    const newActivities = [...activities, newActivity]
    setActivities(newActivities)
  }

  return (
    <main>
      {/* <Routes>
        <Route path="/locations" element={<Locations />} />
      </Routes> */}
      <h1>Plan your trip to NYC!</h1>
      <h2>{'Add an Activity here:'}</h2>
      <AddActivityForm onAddActivity={handleAddActivity} />
      <h2>{'Activities:'}</h2>
      <Activities activities={activities} />
    </main>
  )
}

export default App
