import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Private from './Pages/Private'
import About from './Pages/About'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
         <Route element={<Private/>}>
        <Route path='/about' element={<About/>}></Route>
        </Route>
        <Route path='*' element={<h2>page not found</h2>}></Route>
      </Routes>
    </>
  )
}

export default App
