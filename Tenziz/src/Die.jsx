export default function Die(props) {
    return (
        <button 
            onClick = {props.onClick}
            style={{backgroundColor: props.obj.isHeld ? "#59E391" : "white"}}
        >
            {props.obj.value}
        </button>
    )
}