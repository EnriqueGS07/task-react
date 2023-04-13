import { useState } from "react";
import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { Task } from "./Task";
import { Button, Flex, Input, ListItem, UnorderedList } from "@chakra-ui/react";


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


    useEffect(() => {
        if(localStorage.getItem('listChecked') !== null){
            const data = JSON.parse(localStorage.getItem('listChecked'));
            setChecked(data);
        }
    }, [])
    

    return (
        <Flex direction="column" alignContent="center" justifyItems="center">
            <Flex>
            <Flex width="40%" direction="column">
            <Input m="8px" id="input-name" onChange={handeChangeName} type="text" placeholder="new task name" />
            {formValidation.name && <span style={{color:'red'}}>{formValidation.name}</span>}
            <Input m="8px" id="input-desc" type="text" placeholder="new task descriptin"/>
            <Button bgColor="red.700" color="white" id="add" disabled={!isFormatValid} onClick={newTask}>Add task</Button>
            </Flex>
            <Flex ml="20px">
                <UnorderedList>
                {
                    list.map((task) => (
                        <ListItem key={task.name + task.desc}>
                            <Flex m="5px" direction="row">
                                <Task   name={task.name} 
                                state={checked.includes(task.name)} 
                                desc={task.desc} 
                                onCheckClick={handleState}
                                />
                                <Flex >
                                    <Button bgColor="red.700" color="white" ml="10px" mr="10px" id={task.name +" "+ task.desc + " del"} onClick={deleteTask}>Borrar</Button>
                                    <Button ml="10px" mr="10px" bgColor="red.700" color="white" id={task.name +" "+ task.desc + " mod"} onClick={modTask}>editar</Button>
                                </Flex>
                            </Flex>
                        </ListItem>
                        
                    ))
                }
                </UnorderedList>
            </Flex>
            </Flex>
        </Flex>
    );
}