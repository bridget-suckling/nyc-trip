import React, { useState } from 'react'
import { apiAddActivity, apiUpdateActivity } from '../apiClient'

function AddActivityForm(props) {
  const activity = props.activity

  const newActivity = {
    name: '',
    type: '',
    location_id: '',
    time: '',
    trainline: '',
    cost: '',
    url: '',
    comments: '',
  }

  const [form, setForm] = useState(activity ?? newActivity)
  const [showForm, setShowForm] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (props.activity) {
      apiUpdateActivity(form)
        .then(() => {
          setForm(newActivity)
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else {
      apiAddActivity(form)
        .then(() => {
          setForm(newActivity)
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
  }

  function handleUpdateButton(event) {
    event.preventDefault()
    setShowForm(!showForm)
  }

  return (
    <>
      {props.activity ? (
        <button className="smallbutton" onClick={handleUpdateButton}>
          Edit
        </button>
      ) : null}

      {showForm || !props.activity ? (
        <>
          {props.activity ? null : <h3>New Activity</h3>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div>
              <label htmlFor="type">Type: </label>
              <select
                type="text"
                name="type"
                id="type"
                onChange={handleChange}
                value={form.type}
              >
                <option value="">--- Select activity type ---</option>
                <option value="Food">Food</option>
                <option value="Museum or gallery">Museum or gallery</option>
                <option value="Shopping">Shopping</option>
                <option value="Activity">Activity</option>
              </select>
            </div>
            <div>
              <label htmlFor="location_id">Location: </label>
              <select
                type="text"
                name="location_id"
                id="location_id"
                onChange={handleChange}
                value={form.location_id}
              >
                <option value="">--- Select location ---</option>
                {props.locations &&
                  props.locations.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="time">Best time to visit: </label>
              <select
                type="text"
                name="time"
                id="time"
                onChange={handleChange}
                value={form.time}
              >
                <option value="">--- Select time ---</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Anytime">Anytime</option>
              </select>
            </div>
            <div>
              <label htmlFor="trainLine">Train Line: </label>
              <input
                type="text"
                name="trainLine"
                id="trainLine"
                onChange={handleChange}
                value={form.trainLine}
              />
            </div>
            <div>
              <label htmlFor="url">Website: </label>
              <input
                type="text"
                name="url"
                id="url"
                onChange={handleChange}
                value={form.url}
              />
            </div>
            <div>
              <label htmlFor="comments">Comments: </label>
              <input
                type="text"
                name="comments"
                id="comments"
                onChange={handleChange}
                value={form.comments}
              />
            </div>
            <button className="button" type="submit">
              {props.activity
                ? `Update ${props.activity.name}`
                : 'Add Activity'}
            </button>
          </form>
        </>
      ) : null}
    </>
  )
}

export default AddActivityForm
