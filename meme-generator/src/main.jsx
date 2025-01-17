import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
      topText: "One does not Simply",
      bottomText: "Walk into a Mordor",
      imgUrl: "http://i.imgflip.com/1bij.jpg",
    })
    const [arrayOfMemes, setArrayOfMemes] = useState(["http://i.imgflip.com/1bij.jpg"])

    function handleChange(event) {
      const {value, name} = event.currentTarget
      setMeme((prevMeme) => ({
          ...prevMeme, 
          [name]: value 
        }))
      
    }

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
          .then(data => {
            setArrayOfMemes(data.data.memes.map(meme => meme.url))})
    }, [0])

    function handleNewMeme() {
      setMeme(prevMeme => {
        return ({
          ...prevMeme, 
          imgUrl: arrayOfMemes[Math.floor(Math.random() * arrayOfMemes.length)]
        })
      })
    }

    return (
        <main>
          <div className="form">
            <label>
              <span>Top Text</span>
              <input 
                type="text"
                placeholder={meme.topText}
                name="topText"
                onChange={handleChange}
                value = {meme.topText}
              />
            </label>

            <label>
              <span>Bottom Text</span>
              <input 
                type="text"
                placeholder={meme.bottomText}
                onChange={handleChange}
                name="bottomText"
                value = {meme.bottomText}
              ></input>
            </label>

            <button onClick={handleNewMeme}>Get new meme image 🖼</button>
          </div>

          <div className="meme">
            <img 
              src={meme.imgUrl}
              aria-label="meme-image"
            />
            <span className="top">{meme.topText.toUpperCase()}</span>
            <span className="bottom">{meme.bottomText.toUpperCase()}</span>
          </div>
        </main>
    )
}