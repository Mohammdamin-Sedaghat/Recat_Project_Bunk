import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Main />
    </>
)
