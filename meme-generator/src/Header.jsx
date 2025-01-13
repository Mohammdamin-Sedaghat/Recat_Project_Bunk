import imgUrl from '../images/Troll_Face.png'

export default function Header() {
    return (
        <header>
            <img src={imgUrl} />
            <h2>Meme Generator</h2>
        </header>
    )
}