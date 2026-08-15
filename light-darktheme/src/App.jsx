import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Light_dark from './component/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Light_dark/>
    </>
  )
}

export default App
