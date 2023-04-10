import "../index.css"
export const Task = (props) => {
    const {name, state, desc, onCheckClick} = props

    

    return(
        <div className={state ? "done": "undonde"}>
            <input onClick={onCheckClick} type="checkbox" defaultChecked={state} id={name}/>
            <label htmlFor={name} >{name}: "Descripcion:" {desc}</label>
        </div>
    )
}