import { useState } from "react";
import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { Task } from "./Task";


export const TaskList = () => {
    const [checked, setChecked] = useState([]);
    const [list, newTask, modTask, deleteTask] = useTask();
    

    let checkedCopy = [...checked]

    const handleState = (name) =>{
        if(!checked.includes(name.target.id)){
            checkedCopy = [...checked, name.target.id];

        }else{
            checkedCopy = checked.filter((taskName) => name.target.id != taskName );
        }    
        setChecked(checkedCopy);
        console.log({checked})    
        localStorage.setItem("listChecked", JSON.stringify(checkedCopy));
    }



    useEffect(() => {
        if(localStorage.getItem('listChecked') !== null){
            const data = JSON.parse(localStorage.getItem('listChecked'));
            setChecked(data);
        }
    }, [])
    

    return (
        <div>
            <input id="input-name" type="text" placeholder="new task name" />
            <br />
            <input id="input-desc" type="text" placeholder="new task descriptin"/>
            <button id="add" onClick={newTask}>Add task</button>
            <ul>
                {
                    list.map((task) => (
                        <li key={task.name + task.desc}>
                            <Task   name={task.name} 
                            state={checked.includes(task.name)} 
                            desc={task.desc} 
                            onCheckClick={handleState}
                            />
                            <button id={task.name +" "+ task.desc + " del"} onClick={deleteTask}>Borrar</button>
                            <button id={task.name +" "+ task.desc + " mod"} onClick={modTask}>editar</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}