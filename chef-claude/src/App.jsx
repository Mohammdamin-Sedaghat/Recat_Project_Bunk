import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

/*
Improvement Oportunities: 
    Improve the AI. 
    Add a list of ingredients so when they search, it pops up. 
*/

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Main />
    </>
)
