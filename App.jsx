import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sign-in' element={<Signin/>}/>
  <Route path='/Sign-Up' element={<SignOut/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
