import React from 'react'
import './App.css'

function Tasks({ taskName, taskTime }) {
  return (
    <div className='tasks'>
      <h2>Task Name : {taskName}</h2>
      <h2>Time To Compleate : {taskTime}</h2>
    </div>
  )
}

export default Tasks