import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li key="1">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
