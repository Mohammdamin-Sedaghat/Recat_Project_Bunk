export default function Main() {
    return (
        <main>
          <form>
            <label>
              <span>Top Text</span>
              <input 
                type="text"
                placeholder="Shut up"
                name="top-text"
              />
            </label>

            <label>
              <span>Bottom Text</span>
              <input 
                type="text"
                placeholder="And take my money"
              ></input>
            </label>

            <button>Get new meme image 🖼</button>
          </form>

          <div className="meme">
            <img 
              src="http://i.imgflip.com/1bij.jpg"
              aria-label="meme-image"
            />
          </div>
        </main>
    )
}