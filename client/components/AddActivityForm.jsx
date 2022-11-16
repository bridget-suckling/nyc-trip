import React, { useState } from 'react'
import { apiAddActivity } from '../apiClient'

function AddActivityForm(props) {
  const initialFormData = {
    name: '',
    type: '',
    location: '',
    time: '',
    trainline: '',
    cost: '',
    website: '',
    comments: '',
  }
  const [form, setForm] = useState(initialFormData)
  // const [activities, setActivities] = useState([''])

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
    apiAddActivity(form)
      .then((newActivity) => {
        props.setActivities([...props.activities, newActivity])
        setForm(initialFormData)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <h1>Add an Activity:</h1>
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
          <label htmlFor="location">Location: </label>
          <select
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={form.location}
          >
            <option value="">--- Select location ---</option>
            <option value="Upper West Side">Upper West Side</option>
            <option value="Upper East Side">Upper East Side</option>
            <option value="Hells Kitchen">Hells Kitchen</option>
            <option value="Theater District">Theater District</option>
            <option value="Midtown">Midtown</option>
            <option value="Garment District">Garment District</option>
            <option value="Murray Hill">Murray Hill</option>
            <option value="Chelsea">Chelsea</option>
            <option value="Korea Town">Korea Town</option>
            <option value="Flatiron District">Flatiron District</option>
            <option value="Kips Bay">Kips Bay</option>
            <option value="Gramercy">Gramercy</option>
            <option value="Stuyvesant Town">Stuyvesant Town</option>
            <option value="Meatpacking District">Meatpacking District</option>
            <option value="West Village">West Village</option>
            <option value="Greenwich Village">Greenwich Village</option>
            <option value="NoHo">NoHo</option>
            <option value="East Village">East Village</option>
            <option value="Alphabet City">Alphabet City</option>
            <option value="Hudson Square">Hudson Square</option>
            <option value="SoHo">SoHo</option>
            <option value="Nolita">Nolita</option>
            <option value="Little Italy">Little Italy</option>
            <option value="Lower East Side">Lower East Side</option>
            <option value="Tribeca">Tribeca</option>
            <option value="Chinatown">Chinatown</option>
            <option value="Civic Center">Civic Center</option>
            <option value="Two Bridges">Two Bridges</option>
            <option value="Battery Park City">Battery Park City</option>
            <option value="Financial District">Financial District</option>
            <option value="The Battery">The Battery</option>
            <option value="Roosevelt Island">Roosevelt Island</option>
            <option value="Astoria">Astoria</option>
            <option value="Long Island City">Long Island City</option>
            <option value="Greenpoint">Greenpoint</option>
            <option value="Williamsburg">Williamsburg</option>
            <option value="East Williamsburg">East Williamsburg</option>
            <option value="Ridgewood">Ridgewood</option>
            <option value="Buswick">Buswick</option>
            <option value="Dumbo">Dumbo</option>
            <option value="Brooklyn Navy Yard">Brooklyn Navy Yard</option>
            <option value="Brooklyn Heights">Brooklyn Heights</option>
            <option value="Downtown Brooklyn">Downtown Brooklyn</option>
            <option value="Fort Greene">Fort Greene</option>
            <option value="Clinton Hill">Clinton Hill</option>
            <option value="Columbia Street Waterfront District">
              Columbia Street Waterfront District
            </option>
            <option value="Boerum Hill">Boerum Hill</option>
            <option value="Gowanus">Gowanus</option>
            <option value="Park Slope">Park Slope</option>
            <option value="Red Hook">Red Hook</option>
            <option value="Prospect Lefferts Gardens">
              Prospect Lefferts Gardens
            </option>
            <option value="Flushing">Flushing</option>
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
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            id="website"
            onChange={handleChange}
            value={form.website}
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
          Add activity
        </button>
      </form>
    </>
  )
}

export default AddActivityForm
