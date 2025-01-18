import Die from "./Die"
import Header from "./Header"
import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(generateNewDice)
    const buttonRef = useRef(null)

    //checking if the game is won.
    const gameWon = dice.every(die => 
        (die.isHeld && (die.value === dice[0].value)))

    useEffect(()=>{
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

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
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations you have won press "New Game" to beigin again</p>}
            </div>
            <Header />
            <div className="die-container">
                {dieElements}
            </div>
            <button ref={buttonRef} className="roll-butt" onClick={rollNewDice}>
                {gameWon ? "New Game":"Roll"}
            </button>
        </main>
    )
}

function generateNewDice() {
    return new Array(10)
        .fill(0)
        .map(()=> ({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }))
}