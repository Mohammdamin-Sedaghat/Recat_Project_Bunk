import Die from "./Die"
import Header from "./Header"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(generateNewDice)

    //checking if the game is won.
    const gameWon = dice.every(die => 
        (die.isHeld && (die.value === dice[0].value)))

    function rollNewDice() {
        if (!gameWon) {
            setDice(prevDieValue => {
                return prevDieValue.map(die =>{
                    if (!die.isHeld) {
                        return {
                            ...die,
                            value: Math.ceil(Math.random() * 6)
                        }
                    }
                    return die
                })
            }) 
        } else {
            setDice(generateNewDice())
        }
    }

    function handleClick(id) {
        setDice(prevDie => {
            return prevDie.map(die =>{
                if (die.id === id) {
                    return {
                        ...die, 
                        isHeld: !die.isHeld
                    }
                }
                return die
            })
        })
    }
    
    const dieElements = dice.map(die => <Die key={die.id} onClick={()=>{handleClick(die.id)}} obj={die} />)

    return (
        <main>
            {gameWon ? <Confetti recycle={false} /> : undefined}
            <Header />
            <div className="die-container">
                {dieElements}
            </div>
            <button className="roll-butt" onClick={rollNewDice}>
                {gameWon ? "New Game":"Roll"}
            </button>
        </main>
    )
}

function generateNewDice() {
    console.log("hi")
    return new Array(10)
        .fill(0)
        .map(()=> ({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }))
}