import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link className="headinglink" to="/">
        <h1>Plan a trip to New York City.</h1>
      </Link>

      <button className="button" key="4">
        <Link to="/activities" className="link">
          View activities
        </Link>
      </button>

      <button className="button" key="3">
        <Link to="/add" className="link">
          Add an activity
        </Link>
      </button>
      <br></br>
      <br></br>
    </div>
  )
}

export default Home
