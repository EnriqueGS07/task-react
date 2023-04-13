import { useState } from "react";
import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { Task } from "./Task";


export const TaskList = () => {
    const [checked, setChecked] = useState([]);
    const [list, newTask, modTask, deleteTask] = useTask();
    const [name, setName] = useState([]);
    const [formValidation, setFormValidation] = useState({
        name: undefined,
    })
    

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


    function handeChangeName(event){
        const value = event.target.value;
        setFormValidation({
            ...formValidation,
            name: value.length > 3? "": "The name must be longer",
        })
        setName(value);
    }


    const isFormatValid = Object.keys(formValidation).every((key) => formValidation[key] === "");

    console.log(isFormatValid + " " + formValidation.name)

    useEffect(() => {
        if(localStorage.getItem('listChecked') !== null){
            const data = JSON.parse(localStorage.getItem('listChecked'));
            setChecked(data);
        }
    }, [])
    

    return (
        <div>
            <input id="input-name" onChange={handeChangeName} type="text" placeholder="new task name" />
            {formValidation.name && <span style={{color:'red'}}>{formValidation.name}</span>}
            <br />
            <input id="input-desc" type="text" placeholder="new task descriptin"/>
            <button id="add" disabled={!isFormatValid} onClick={newTask}>Add task</button>
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