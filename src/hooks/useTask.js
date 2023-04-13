import { useEffect, useState } from "react";

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

    function modTask(oldTask){
        let newName = prompt("Please the new task name:", oldTask.target.id.split(' ')[0]);
        if (newName == null || newName == "") {
            newName = oldTask.target.id.split(' ')[0]
        }
        let newDesc = prompt("Please the new task description:", oldTask.target.id.split(' ')[1]);
        if (newDesc == null || newDesc == "") {
            newDesc = oldTask.target.id.split(' ')[1]
        }
        oldTask = {"name": oldTask.target.id.split(' ')[0], "desc": oldTask.target.id.split(' ')[1]}
        let newTask = {"name": newName, "desc": newDesc}
        let tasksCopy = [...tasks];
        let ind = -1;
        tasksCopy.forEach(task => {
            console.log(task.name + " " + task.desc);
            console.log(oldTask.name + " "+oldTask.desc)
            if(task.name === oldTask.name && task.desc === oldTask.desc){
                console.log("entro")
                ind = tasksCopy.indexOf(task);
            }
        })
        tasksCopy[ind] = newTask;
        setTask(tasksCopy);
        localStorage.setItem('tasklist', JSON.stringify(tasksCopy))
    }

    function deleteTask(taskToDel){
        taskToDel = {"name": taskToDel.target.id.split(' ')[0], "desc": taskToDel.target.id.split(' ')[1]}
        let tasksCopy = [...tasks];
        tasksCopy = tasksCopy.filter((task) => task.name !== taskToDel.name && task.desc !== taskToDel.desc);
        setTask(tasksCopy);
        localStorage.setItem('tasklist', JSON.stringify(tasksCopy))
        
    }

    useEffect(() => {
        if(localStorage.getItem('tasklist') !== null){
            const data = JSON.parse(localStorage.getItem('tasklist'));
            // console.log(data);
            setTask(data);
        }
    },[])


    return [tasks, addTask, modTask, deleteTask];
}