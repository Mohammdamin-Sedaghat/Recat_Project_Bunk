import { createRoot } from "react-dom/client"
import Main from "./Main"
import Header from "./Header"

createRoot(document.querySelector("#root")).render(
  <>
    <Header />
    <Main />
  </>
)