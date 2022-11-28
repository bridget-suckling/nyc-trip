import React, { useState } from 'react'

function Time(props) {
  const [time, setTime] = useState('')

  function handleChange(event) {
    const time = event.target.value
    props.onChange(time)
    setTime(time)
  }

  return (
    <>
      <div>
        <label htmlFor="time">View by time of day</label>
        <br></br>
        <select
          className="largeinput"
          type="text"
          name="time"
          id="time"
          onChange={handleChange}
          value={time}
        >
          <option value="">--- Select time ---</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Anytime">Anytime</option>
        </select>
      </div>
    </>
  )
}

export default Time
