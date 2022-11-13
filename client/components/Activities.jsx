import React from 'react'

function Activities(props) {
  const { activities } = props
  return (
    <section>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            <p>
              Name: {activity.name}
              Type: {activity.type}
              Location: {activity.location}
              Train Line: {activity.trainLine}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activities
