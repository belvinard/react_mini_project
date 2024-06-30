import { useState } from 'react';
import './App.css';

function App(){
    // let count = 0;
    const [tasks, setTasks] = useState([
      {id: 784, name: "Record react Lectures", completed: false}, 
      {id: 251, name: "Edit react Lectures", completed: true}, 
      {id: 452, name: "Watch Lectures", completed: false}
    ]);
    
    function handleDelete(id){
      // console.log(id);
      setTasks(tasks.filter(task => task.id !== id))
    }

    return(
        <div className='App'>
          <h1>Task List</h1>
          <ul>

            
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.id} - {task.name}</span>
                <button onClick={()=> handleDelete(task.id)} className='delete'>Delete</button>
              </li>

            ))}
          </ul>

        </div>
    );
}

export default App;