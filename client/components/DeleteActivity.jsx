import React from 'react'

function DeleteActivity(props) {
  const id = props.activityId
  const name = props.activityName

  return (
    <>
      <button
        className="smallbutton"
        onClick={() => props.handleDeleteButton({ id, name })}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteActivity
