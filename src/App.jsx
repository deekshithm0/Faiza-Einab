
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Clients from './components/Clients'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  

  return (
    <div className=''>
      <Header/>

      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>

      <Clients/>
      <Footer/>
    </div>
  )
}

export default App
