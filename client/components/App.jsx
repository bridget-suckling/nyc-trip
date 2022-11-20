import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import Home from './Home'
import Type from './Type'
import AddActivityForm from './AddActivityForm'
// import { apiGetLocations } from '../apiClient'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const locations = useSelector((state) => state.locations)
  // const dispatch = useDispatch()
  // const [locations, setLocations] = useState([])

  // useEffect(() => {
  //   apiGetLocations()
  //     .then((locationsData) => {
  //       setLocations(locationsData)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }, [])
  return (
    <>
      <Home />
      <main>
        <Routes>
          <Route path="*" />
          <Route path="/" />
          <Route
            path="/activities"
            element={<Activities locations={locations} />}
          />
          <Route
            path="/add"
            element={<AddActivityForm locations={locations} />}
          />
          <Route path="/type" element={<Type />} />
        </Routes>
      </main>
    </>
  )
}

export default App
