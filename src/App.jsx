
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  
  return (
    <div>
      <Header/>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
