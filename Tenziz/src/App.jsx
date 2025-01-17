import Die from "./Die"
import { useState } from "react"

export default function App() {
    const [dieValues, setDieValues] = useState(generateAllNewDie())

    function generateAllNewDie() {
        return new Array(10)
            .fill(0)
            .map(()=> Math.ceil(Math.random() * 6))
    }

    function rollNewDice() {
        setDieValues(generateAllNewDie())
    }
    
    const dieElements = dieValues.map((dieVal, i) => <Die key={i} value={dieVal} />)

    return (
        <main>
            <div className="die-container">
                {dieElements}
            </div>
            <button className="roll-butt" onClick={rollNewDice}>Roll</button>
        </main>
    )
}