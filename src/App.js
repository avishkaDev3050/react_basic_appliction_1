import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';

// this is the simple react basic appliction
// practice use useState
// practice handle event
// practice create component and re-use that
// ***** Happy Coding *****//

function App() {

  const [taskName, setTaskName] = useState('')
  const [time, setTime] = useState('')
  const [taskList, setTaskList] = useState([])
  const [id, setId] = useState(0)

  const addTasks = () => {
    setTaskList([...taskList, {task: taskName, time: time}])
    setTaskName('')
    setTime('')
    console.log(taskList)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <label>Task</label>
      <input type='text' id='task' onChange={(e) => {
        setTaskName(e.target.value)
      }} />
      <label>Time</label>
      <input type='text' id='time' onChange={(e) => {
        setTime(e.target.value)
      }} />
      <button onClick={addTasks}>Add Task</button>

      {
        taskList.map((task) => {
          return <Tasks taskName={task.task} taskTime={task.time} />
        })
      }

      {/* <Tasks taskName='do home work' taskTime='1 hour' /> */}
    </div>
  );
}

export default App;
