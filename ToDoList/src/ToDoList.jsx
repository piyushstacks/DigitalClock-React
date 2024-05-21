import React,{useState} from "react";


function ToDOList(){
    const [tasks, setTasks] = useState(["Journal","Take a Shower","Read a book"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter A Task" value={newTask} onChange={handleInputChange}/>
                <button className="add-btn" onClick={addTask}>Add Task</button>

            </div>

            <ol>
                {tasks.map((task, index)=>
                <li key={index}><span className="text">{task}</span>
                
                <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-btn" onClick={()=>moveTaskUp(index)}>👆🏻</button>
                <button className="move-btn" onClick={()=>moveTaskDown(index)}>👇🏻</button>
                
                </li>
                )}
            </ol>
        </div>
    )
}

export default ToDOList