import React, { useState } from 'react'

function Type(props) {
  const [type, setType] = useState('')

  function handleChange(event) {
    const type = event.target.value
    props.onChange(type)
    setType(type)
  }

  return (
    <>
      <div>
        <label htmlFor="type">View by type</label>
        <br></br>
        <select
          className="largeinput"
          type="text"
          name="type"
          id="type"
          onChange={handleChange}
          value={type}
        >
          <option value="">--- Select activity type ---</option>
          <option value="Food">Food</option>
          <option value="Museum or gallery">Museum / gallery</option>
          <option value="Shopping">Shopping</option>
          <option value="Activity">Activity</option>
        </select>
      </div>
    </>
  )
}

export default Type
