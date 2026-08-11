import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TreeView from './Component/Index'
import menus from './Component/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TreeView menus={menus}/>
    </>
  )
}

export default App
