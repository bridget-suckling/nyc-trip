// import React, { useState } from 'react'
// import {
//   apiUpdateActivity,
//   apiDeleteActivity,
//   apiGetActivities,
//   apiGetActivity,
// } from '../apiClient'
// import AddActivityForm from './AddActivityForm'

// function UpdateActivities(props) {
//   const [updating, setUpdating] = useState(false)
//   const activities = props.activities
//   return updating ? (
//     <AddActivityForm
//       apiUpdateActivity={apiUpdateActivity}
//       activities={activities}
//       variant="update"
//       setUpdating={setUpdating}
//     />
//   ) : (
//     <div>
//       <div>
//         <p>{activities.name}</p>
//       </div>
//       <button className="button" onClick={() => setUpdating(true)}>
//         Update
//       </button>
//     </div>
//   )
// }

// function UpdateActivity(props) {
//   const activityFormData = {
//     name: '',
//     type: '',
//     location_id: '',
//     time: '',
//     trainline: '',
//     cost: '',
//     url: '',
//     comments: '',
//   }

//   const [form, setForm] = useState(activityFormData)

//   function handleChange(event) {
//     const { name, value } = event.target
//     const newForm = {
//       ...form,
//       [name]: value,
//     }
//     setForm(newForm)
//   }
//   function handleSubmit(event) {
//     event.preventDefault()
//     apiUpdateActivity(form)
//       .then((updatedActivity) => {
//         props.setActivity([...props.activities, updatedActivity])
//         setForm(activityFormData)
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Name">
//           <input
//             id="name"
//             onChange={handleChange}
//             value={form.name}
//             name="name"
//           />
//         </label>
//         <button className="button">Update activity</button>
//       </form>
//     </>
//   )
// }

export default UpdateActivities
