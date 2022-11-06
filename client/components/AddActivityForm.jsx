import React, { useState } from 'react'

function AddActivityForm(props) {
  const { onAddActivity } = props
  const [newActivity, setNewActivity] = useState({
    name: '',
    type: '',
    location: '',
    train: '',
    neighbourLocations: '',
    time: '',
    website: '',
    notes: '',
  })

  function handleChange(event) {
    setNewActivity({
      ...newActivity,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAddActivity(newActivity)
    setNewActivity({
      name: '',
      type: '',
      location: '',
      train: '',
      neighbourLocations: '',
      time: '',
      website: '',
      notes: '',
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Activity: </label>
        <input
          type="text"
          name="type"
          id="type"
          onChange={handleChange}
          value={newActivity.type}
        />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={newActivity.location}
        />
      </div>
      <button className="button" type="submit">
        Add activity
      </button>
    </form>
  )
}

export default AddActivityForm
