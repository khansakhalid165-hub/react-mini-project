import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Imageslider from './component/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Imageslider url={'https:/picsum.photos/v2/list'} limit={10}/>
    </>
  )
}

export default App
