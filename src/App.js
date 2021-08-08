import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task 1',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
    {
        id:2,
        text: 'Task 2',
        day: 'Feb 10th at 3:30am',
        reminder: true
    },
    {
        id:3,
        text: 'Task 3',
        day: 'Feb 22nd at 4:00pm',
        reminder: false
    }

    ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}



export default App;
