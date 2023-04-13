import { Checkbox, Flex, FormLabel } from "@chakra-ui/react"
import "../index.css"
export const Task = (props) => {
    const {name, state, desc, onCheckClick} = props

    return(
        <Flex className={state ? "done": "undonde"}>
            <input onClick={onCheckClick} type="checkbox"  id={name} defaultChecked = {state}/>
            <label htmlFor={name} >{name}: "Descripcion:" {desc}</label>
        </Flex>
    )
}