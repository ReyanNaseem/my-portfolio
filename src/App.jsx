import './App.css'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={"404 NOT FOUND"}/>
    </Routes>
    {/* <Interface/> */}
    </>
  )
}

export default App
