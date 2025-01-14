import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
      topText: "One does not Simply",
      bottomText: "Walk into a Mordor",
      imgUrl: "http://i.imgflip.com/1bij.jpg",
    })

    function handleChange(event) {
      const {value, name} = event.currentTarget
      if (name === "top-text"){
        setMeme((prevMeme) => ({ ...prevMeme, topText: value }))
      } else {
        setMeme((prevMeme) => ({ ...prevMeme, bottomText: value }))
      }
      
    }

    return (
        <main>
          <div className="form">
            <label>
              <span>Top Text</span>
              <input 
                type="text"
                placeholder={meme.topText}
                name="top-text"
                onChange={handleChange}
              />
            </label>

            <label>
              <span>Bottom Text</span>
              <input 
                type="text"
                placeholder={meme.bottomText}
                onChange={handleChange}
              ></input>
            </label>

            <button>Get new meme image 🖼</button>
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