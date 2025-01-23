import { getFarewellText } from "./utils"

export default function TalkingSection({ msg, lang }) {
    const messageArray = [
      {
        cond: "won",
        topMessage: "You win!",
        bottomMessage: "Well done! 🎉",
        styles: {
          backgroundColor: "#10A95B",
        }
      },{
        cond: "lost",
        topMessage: "Game over!",
        bottomMessage: "You lose! Better start learning Assembly 😭",
        styles: {
          backgroundColor: "#BA2A2A",
        }
      }, {
        cond: "none",
        topMessage: "YOU",
        bottomMessage: "SHOULDNT SEE THIS",
        styles: {
          visibility: "hidden",
        }
      }, {
        cond: "lang",
        topMessage: lang && getFarewellText(lang.name),
        bottomMessage: "  ",
        styles: {
            backgroundColor: "#7A5EA7",
            border: "1px dashed #323232",
            fontStyle: "italic",
            fontWeight: "400",
            padding: "18px"
        }
      }
    ]
  
    const currMessage = messageArray.find(item => item.cond === msg)
  
    return (
        <section 
            className="state" 
            style={currMessage.styles} 
            aria-live="polite" 
            role="status"
        >
            <span>{ currMessage.topMessage }</span>
            <span className="bottom">{ currMessage.bottomMessage }</span>
        </section>
    )
  }