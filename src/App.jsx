import './App.css'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={"404 NOT FOUND"}/>
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
