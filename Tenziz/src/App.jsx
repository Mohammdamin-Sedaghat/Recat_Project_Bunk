import Die from "./Die"
import Header from "./Header"
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
        setDieValues(prevDieValue => {
            return prevDieValue.map(die =>{
                if (!die.isHeld) {
                    return {
                        ...die,
                        value: Math.ceil(Math.random() * 6)
                    }
                }
                return {...die}
            })
        })
    }

    function handleClick(id) {
        setDieValues(prevDie => {
            return prevDie.map(die =>{
                if (die.id === id) {
                    return {
                        ...die, 
                        isHeld: !die.isHeld
                    }
                }
                return {...die}
            })
        })
    }
    
    const dieElements = dieValues.map(die => <Die key={die.id} onClick={()=>{handleClick(die.id)}} obj={die} />)

    return (
        <main>
            <Header />
            <div className="die-container">
                {dieElements}
            </div>
            <button className="roll-butt" onClick={rollNewDice}>Roll</button>
        </main>
    )
}