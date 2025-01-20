import { createRoot } from 'react-dom/client'
import Main from "./Main"
import Header from "./Header"

/*
Improvement Oportunities: 
    Make the use able to move the text. 
    Add the option to add text. 
*/

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
  </>
)
