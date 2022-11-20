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
        <button className="button" onClick={handleUpdateButton}>
          Update
        </button>
      ) : null}

      {showForm || !props.activity ? (
        <>
          {props.activity ? null : <h2>Add an Activity:</h2>}
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
                <option value="1">Upper West Side</option>
                <option value="2">Upper East Side</option>
                <option value="3">Hells Kitchen</option>
                <option value="4">Theater District</option>
                <option value="5">Midtown</option>
                <option value="6">Garment District</option>
                <option value="7">Murray Hill</option>
                <option value="8">Chelsea</option>
                <option value="9">Korea Town</option>
                <option value="10">Flatiron District</option>
                <option value="11">Kips Bay</option>
                <option value="12">Gramercy</option>
                <option value="13">Stuyvesant Town</option>
                <option value="14">Meatpacking District</option>
                <option value="15">West Village</option>
                <option value="16">Greenwich Village</option>
                <option value="17">NoHo</option>
                <option value="18">East Village</option>
                <option value="19">Alphabet City</option>
                <option value="20">Hudson Square</option>
                <option value="21">SoHo</option>
                <option value="22">Nolita</option>
                <option value="23">Little Italy</option>
                <option value="24">Lower East Side</option>
                <option value="25">Tribeca</option>
                <option value="26">Chinatown</option>
                <option value="27">Civic Center</option>
                <option value="28">Two Bridges</option>
                <option value="29">Battery Park City</option>
                <option value="30">Financial District</option>
                <option value="31">The Battery</option>
                <option value="32">Roosevelt Island</option>
                <option value="33">Astoria</option>
                <option value="34">Long Island City</option>
                <option value="35">Greenpoint</option>
                <option value="36">Williamsburg</option>
                <option value="37">East Williamsburg</option>
                <option value="38">Ridgewood</option>
                <option value="39">Buswick</option>
                <option value="40">Dumbo</option>
                <option value="41">Brooklyn Navy Yard</option>
                <option value="42">Brooklyn Heights</option>
                <option value="43">Downtown Brooklyn</option>
                <option value="44">Fort Greene</option>
                <option value="45">Clinton Hill</option>
                <option value="46">Columbia Street Waterfront District</option>
                <option value="47">Boerum Hill</option>
                <option value="48">Gowanus</option>
                <option value="49">Park Slope</option>
                <option value="50">Red Hook</option>
                <option value="51">Prospect Lefferts Gardens</option>
                <option value="52">Flushing</option>
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
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                name="notes"
                id="notes"
                onChange={handleChange}
                value={form.notes}
              />
            </div>
            <button className="button" type="submit">
              {props.activity
                ? `Update ${props.activity.name}`
                : 'Add an Activity'}
            </button>
          </form>
        </>
      ) : null}
    </>
  )
}

export default AddActivityForm
