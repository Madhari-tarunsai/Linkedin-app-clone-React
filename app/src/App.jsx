import React from 'react'
import NavBarr from './Component/NavBarr/NavBarr'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Home from './Component/Home/Home'
import Recruiter from './DashBoards/Recruiter/Recruiter'



const App = () => {
  return (
    <div>
     <NavBarr/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/recruiterDashBoard' element={<Recruiter />} />

      </Routes>
    </div>
  )
}

export default App