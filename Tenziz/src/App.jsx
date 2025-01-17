import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App() {
    const [dieValues, setDieValues] = useState(generateAllNewDie())

    function generateAllNewDie() {
        return new Array(10)
            .fill(0)
            .map(()=> ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollNewDice() {
        setDieValues(generateAllNewDie())
    }

    function handleClick(id) {
        console.log(id)
    }
    
    const dieElements = dieValues.map(die => <Die key={die.id} onClick={()=>{handleClick(die.id)}} obj={die} />)

    return (
        <main>
            <div className="die-container">
                {dieElements}
            </div>
            <button className="roll-butt" onClick={rollNewDice}>Roll</button>
        </main>
    )
}