import { useState } from "react";
import { useEffect } from "react";
import { Task } from "./Task";


export const TaskList = (props) => {
    const {list} = props
    const [checked, setChecked] = useState([])

    let checkedCopy = [...checked]

    const handleState = (name) =>{
        if(!checked.includes(name.target.id)){
            console.log("entro");
            checkedCopy = [...checked, name.target.id];

        }else{
            checkedCopy = checked.filter((taskName) => name.target.id != taskName );
        }    
        setChecked(checkedCopy);
        console.log({checked})    
        localStorage.setItem("list", JSON.stringify(checkedCopy));
    }




    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('list'));
        setChecked(data);
    }, [])
    
    return (
        <div>
            <input id="input" type="text" placeholder="new task"/>
            <ul>
                {
                    list.map((task) => (
                        <li >
                            <Task name={task.name} 
                            state={checked.includes(task.name)} 
                            desc={task.desc} 
                            onCheckClick={handleState}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}