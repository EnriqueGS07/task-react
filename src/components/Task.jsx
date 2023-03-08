export const Task = (props) => {
    const {name, state} = props

    

    return(
        <div>
            <p className={state}>{name}</p>
        </div>
    )
}