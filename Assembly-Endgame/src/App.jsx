import languages from "../languages.json"
import words from "./words.json"
import TalkingSection from "./TalkingSection"
import { useState } from "react"
import Confetti from "react-confetti"

export default function App() {
  const [currentWords, setCurrentWord] = useState(getRandomWord)
  const [guessed, setGuessed] = useState([])
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const wrongGuessCount = guessed.filter(guess => !currentWords.includes(guess)).length

  const isLost = wrongGuessCount >= languages.length - 1
  const isWon = currentWords.split('').every(letter => guessed.includes(letter))
  const isGameOver = isLost || isWon
  const isLangGone = guessed.length > 0 && !currentWords.includes(guessed[guessed.length - 1])

  const languageElments = languages.map((language, i) => {
    return (
      <span
        key={language.name}
        style={{backgroundColor: language.backgroundColor, color:language.color}}
        className={i < wrongGuessCount ? "lost" : ""}
      >
        {language.name}
      </span>)
  })

  function handleLetter(letter) {
    setGuessed(prevGuess => [...prevGuess.filter(l => l !== letter), letter])
  }

  function newGame() {
    setCurrentWord(getRandomWord);
    setGuessed([]);
  }

  const wordList = currentWords.toUpperCase().split("").map((letter, i) => {
    return <span 
      key={i} 
      className="letter"
      style={(isGameOver && !guessed.includes(letter)) ? {color:"#BA2A2A"} : null}
      >{guessed.includes(letter) || isGameOver ? letter : ""}</span>
  })

  const alphabetList = alphabet.toUpperCase().split('').map(letter => {
    return (
    <button 
      key={letter} 
      onClick={()=> handleLetter(letter)}
      disabled={isGameOver}
      aria-disabled={isGameOver || guessed.includes(letter)}
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
      {isWon && <Confetti recycle={false}/>}
      <header>
          <h1>Assembly Endgame</h1>
          <p className="header-text">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <TalkingSection 
        msg={isWon ? "won" : isLost ? "lost" : isLangGone ? "lang" : "none"}
        lang={isLangGone ? languages[wrongGuessCount - 1] : null}
        />
      <section className="languages">
        {languageElments}
      </section>
      <section className="currentWord">
        {wordList}
      </section>
      <section className="keyboard">
        {alphabetList}
      </section>
      {isGameOver ? <button className="newGame" onClick={newGame}>New Game</button> : undefined}
    </main>
  )
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase()
}