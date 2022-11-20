import React from 'react'

function Type(props) {
  const types = props.types

  return (
    <>
      <div>
        <label htmlFor="location_id">View activities by type</label>
        <br></br>
        <select
          className="largeinput"
          type="text"
          name="location_id"
          id="location_id"
          value={types}
        >
          <option value="">--- Select activity type ---</option>
          <option value="Food">Food</option>
          <option value="Museum or gallery">Museum or gallery</option>
          <option value="Shopping">Shopping</option>
          <option value="Activity">Activity</option>
        </select>
      </div>
    </>
  )
}

export default Type
