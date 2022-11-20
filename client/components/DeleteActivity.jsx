import React from 'react'

function DeleteActivity(props) {
  const id = props.activityId

  return (
    <>
      <button
        className="smallbutton"
        onClick={() => props.handleDeleteButton({ id })}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteActivity
