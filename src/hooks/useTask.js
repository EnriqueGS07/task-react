import { useState } from "react";

export function useTask() {
    const [tasks, setTask] = useState([]);

    function getNamenDesc(){
        var name = document.getElementById("input-name")
        var desc = document.getElementById("input-desc")
        if (name !== null && desc !== null){
            name = name.value;
            desc = desc.value;
            return {"name": name, "desc": desc};
        }else{
            return{};
        }
        
    }


    function addTask(){
        let task = getNamenDesc();
        let newTasks = [...tasks, task];
        setTask(newTasks);
        localStorage.setItem('tasklist', JSON.stringify(newTasks))
    }

    function modTask(oldTask, newTask){
        let task = getNamenDesc();
        let tasksCopy = [...tasks, task];
        let ind = -1;
        tasksCopy.forEach(t => {
            if(t == oldTask){
                ind = tasksCopy.indexOf(t);
            }
        })
        tasksCopy[ind] = newTask;
        setTask(tasksCopy);
        console.log(tasksCopy);
        localStorage.setItem('tasklist', JSON.stringify(tasksCopy))
    }

    function deleteTask(taskToDel){
        let task = getNamenDesc();
        let tasksCopy = [...tasks, task];
        tasksCopy = tasksCopy.filter((task) => t != taskToDel);
        setTask(tasksCopy);
        localStorage.setItem('tasklist', JSON.stringify(tasksCopy))
    }


    return [tasks, addTask, modTask, deleteTask];
}