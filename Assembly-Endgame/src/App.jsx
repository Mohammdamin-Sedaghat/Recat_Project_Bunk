import languages from "../languages.json"

export default function App() {
  const languageElments = languages.map((language, i) => {
    return (
      <span
        key={i}
        style={{backgroundColor: language.backgroundColor, color:language.color}}
      >
        {language.name}
      </span>)
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
    </main>
  )
}