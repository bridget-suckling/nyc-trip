import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Plan your trip!</h1>

      <button className="button" key="4">
        <Link to="/activities" className="link">
          View all activities
        </Link>
      </button>
      <br></br>

      <button className="button" key="3">
        <Link to="/add" className="link">
          Add an activity
        </Link>
      </button>
      <br></br>
    </div>
  )
}

export default Home
