import { useState } from 'react'
import ButtonTemaMode from "./components/buttonTemaMode/ButtonTemaMode";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ButtonTemaMode/>
    </>
  )
}

export default App
