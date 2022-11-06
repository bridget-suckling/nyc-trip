import React from 'react'

function Activities(props) {
  const { activities } = props
  return (
    <section>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            <h3>{activity.type}</h3>
            <h3>{activity.location}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activities
