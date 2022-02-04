import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Components/Nav'
import LinksModal from './Components/LinksModal'
import Welcome from './Components/Welcome'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="App">
      <Nav
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {!openMenu ?
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/404' element={<NotFound />}/>
        <Route path='/*' element={<Navigate to='/404'/>}/>
      </Routes> :
      <LinksModal/>}

    </div>
  );
}

export default App;
