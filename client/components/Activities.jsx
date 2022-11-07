import React from 'react'

function Activities(props) {
  const { activities } = props
  return (
    <section>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            <p>Name: {activity.name}</p>
            <p>Type: {activity.type}</p>
            <p>Location: {activity.location}</p>
            <p>Train Line: {activity.trainLine}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activities
