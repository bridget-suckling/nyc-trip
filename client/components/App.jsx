import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import Home from './Home'
import Locations from './Locations'
import AddActivityForm from './AddActivityForm'
import UpdateActivity from './UpdateActivities'

function App() {
  const [activities, setActivities] = useState([])

  function getActivities() {
    apiGetActivities()
      .then((activities) => {
        setActivities(activities)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  useEffect(() => {
    getActivities()
  }, [])

  return (
    <>
      <Home />
      <main>
        <Routes>
          <Route path="*" />
          <Route path="/locations" element={<Locations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/add" element={<AddActivityForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
