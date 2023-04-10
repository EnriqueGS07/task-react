import { useState } from "react";

export function useTask() {
    const [tasks, setTask] = useState([]);

    function addTask(task){
        let newTasks = [...tasks, task];
        setTask(newTasks);
        localStorage.setItem('tasklist', JSON.stringify(newTasks))
    }

    function modTask(oldTask, newTask){
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
        let tasksCopy = [...tasks, task];
        tasksCopy = tasksCopy.filter((task) => t != taskToDel);
        setTask(tasksCopy);
        localStorage.setItem('tasklist', JSON.stringify(tasksCopy))
    }


    return [tasks, addTask, modTask, deleteTask];
}