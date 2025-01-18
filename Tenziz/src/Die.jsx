export default function Die(props) {
    return (
        <button 
            onClick = {props.onClick}
            style={{backgroundColor: props.obj.isHeld ? "#59E391" : "white"}}
            aria-label={`This is a die with value ${props.obj.value}. 
                        ${props.obj.isHeld ? "Held" : "Not held"}.`}
            aria-pressed={props.obj.isHeld}
        >
            {props.obj.value}
        </button>
    )
}