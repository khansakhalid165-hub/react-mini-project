import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Starrating from './component/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Starrating noofstars={8}/>
    </>
  )
}

export default App
