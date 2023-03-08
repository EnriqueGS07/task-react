import { Task } from "./Task";



export const TaskList = (props) => {
    const {list, onAdd} = props

    
    var hanlesAdd = () => {
        onAdd();
        console.log("hola");
    }
    return (
        <div>
            <input id="input" type="text" placeholder="new task"/>
            <button onClick={hanlesAdd(document.querySelector("#input"))}>create</button>
            <ul>
                {
                    list.map((task) => (
                        <li>
                            <Task name={task.name}state={task.state}  />
                        </li>
                    ))
                }
                {
                    listNews.map((task) => (
                        <li>
                            <Task name={task.name}state={task.state}  />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}