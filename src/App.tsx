import './App.css'
import LandingPage from './pages/Landing'
import {Routes, Route} from 'react-router-dom' 
import Meny from './pages/Meny'
import About from './pages/About'
import Status from './pages/Status'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/meny' element={<Meny />} />
      <Route path='/about' element={<About />} />
      <Route path='/status' element={<Status />} />
    </Routes>
  )
}

export default App
