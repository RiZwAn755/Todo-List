import { useState } from "react";
import "./addtask.css";

function Add({onaddTask}) {
    const [Task, setTask] = useState('');
    const [Tasklists, setTasklists] = useState([]);

    function handleInput(e) 
    {
        setTask(e.target.value); 
    }

    function handlesave()
     {
        if (Task.trim() !== '') 
            { 
                const updatedTasks = [...Tasklists, Task];
                setTasklists(updatedTasks); // Update the local task list
                onaddTask(updatedTasks); // Notify the parent about the updated list
                setTask(""); // Clear the input field
        }
         else 
        {
            alert("Please enter a valid task!"); // Alert if the task is empty
        }
    }

    console.log("Current Task:", Task);
    console.log("Task List:", Tasklists);

    return (
        <>
            <div className="addtask">
                <div>
                    <input 
                        value={Task} 
                        onChange={handleInput} 
                        className="input" 
                        type="text" 
                        placeholder="Enter Your Task Here" 
                    />
                </div>
                <div>
                    <button onClick={handlesave} className="btn">Save</button>
                </div>
            </div>

          
        </>
    );
}

export default Add;
