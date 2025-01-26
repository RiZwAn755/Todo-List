import { useState } from 'react';
import './taskList.css';

export default function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const [newTask, setNewTask] = useState(''); // State for new task input

  function handleDelete(index) {
    const updatedTasks = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(updatedTasks);
  }

  function handleAddTask() {
    if (newTask.trim()) {
      setTaskList([...taskList, newTask]);
      setNewTask(''); // Clear the input field after adding the task
    }
  }

  return (
    <>
       <div className="add-task">
        <input 
        className='input'
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button  className =" btn" onClick={handleAddTask}>Add Task</button>
      </div>



      <table className="tbl">
        <thead className="thd">
          <tr>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td className="Taskname">{task}</td>
              <td>
                <button className = "xx" onClick={() => handleDelete(index)}>Mark as Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </>
  );
}
