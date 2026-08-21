import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/navnar/Navbar'
import Home from './pages/home/Home'
import Favourite from './pages/favourite/Favourite'
import Details from './pages/details/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen p-6  bg-white text-gray-600 text-lg'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourite/>}/>
        <Route path='/recipe-item/:id' element={<Details/>}/>
      </Routes>
    </div>

     
                 
    </>
  )
}

export default App
