import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Plan your trip!</h1>
      <button className="button" key="1">
        <Link to="/">Home</Link>
      </button>
      <br></br>
      <button className="button" key="2">
        <Link to="/locations">Locations</Link>
      </button>
      <br></br>

      <button className="button" key="3">
        <Link to="/add">Add an activity</Link>
      </button>
      <br></br>

      <button className="button" key="4">
        <Link to="/activities">View all activities</Link>
      </button>
    </div>
  )
}

export default Home
