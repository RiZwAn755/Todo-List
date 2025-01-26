
import Nav from "./components/navbar"
import Add from "./components/addTask"
import Tasklist from "./components/tasklist"
import { useState } from "react";

function App() {
  
  const [tasks, setTasks] = useState([]);

  function handleTask(updatedTasks) 
  {
    setTasks(updatedTasks); 
  }

  return (
       <div>

        <Nav/>
        {/* <Add onaddTask={handleTask} /> */}
        <Tasklist tasks = {tasks} />
       </div>
  )
}

export default App
