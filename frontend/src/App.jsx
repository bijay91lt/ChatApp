import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <>
      <div className='p-4 h-screen items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
