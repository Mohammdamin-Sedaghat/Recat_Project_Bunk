import languages from "../languages.json"
import { useState } from "react"

export default function App() {
  const [currentWords, setCurrentWord] = useState("React".toUpperCase())
  const [guessed, setGuessed] = useState([])
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const languageElments = languages.map((language, i) => {
    return (
      <span
        key={i}
        style={{backgroundColor: language.backgroundColor, color:language.color}}
      >
        {language.name}
      </span>)
  })

  function handleLetter(letter) {
    setGuessed(prevGuess => [...prevGuess.filter(l => l !== letter), letter])
  }

  const wordList = currentWords.toUpperCase().split("").map((letter, i) => {
    return <span 
      key={i} 
      className="letter"
      >{guessed.includes(letter) ? letter : ""}</span>
  })

  const alphabetList = alphabet.toUpperCase().split('').map(letter => {
    return (
    <button 
      key={letter} 
      onClick={()=>handleLetter(letter)}
      className={`keyboardLetters ${guessed.includes(letter) ? 
                                      (currentWords.includes(letter) ?
                                        "correct"
                                        : "false")
                                      : ""}`}
    >
      {letter}
    </button>)
  })
  
  return (
    <main>
      <header>
          <h1>Assembly Endgame</h1>
          <p className="header-text">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="state">
        <span>You win!</span>
        <span style={{fontSize:"1rem"}}>Well done! 🎉</span>
      </section>
      <section className="languages">
        {languageElments}
      </section>
      <section className="currentWord">
        {wordList}
      </section>
      <section className="keyboard">
        {alphabetList}
      </section>
      <button className="newGame">New Game</button>
    </main>
  )
}