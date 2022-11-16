import React, { useState, useEffect } from 'react'
import { apiGetActivities } from '../apiClient'
import { Route, Routes } from 'react-router-dom'
import Activities from './Activities'
import Home from './Home'
import Locations from './Locations'
import AddActivityForm from './AddActivityForm'

function App() {
  return (
    <>
      <Home />
      <main>
        <Routes>
          <Route path="/locations/" element={<Locations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/add" element={<AddActivityForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
