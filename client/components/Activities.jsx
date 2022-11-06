import React from 'react'

function Activities(props) {
  const { activities } = props
  return (
    <section>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            <p>{activity.type}</p>
            <p>{activity.location}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activities
