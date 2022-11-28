import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import Home from './Home'
import Map from './Map'
import ActivityForm from './ActivityForm'
import { fetchLocationsAction } from '../Actions/index'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocationsAction())
  }, [])

  return (
    <>
      <Home />
      <main>
        <Routes>
          <Route path="*" />
          <Route path="/" />
          <Route path="/activities" element={<Activities />} />
          <Route path="/add" element={<ActivityForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
    </>
  )
}

export default App
