import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBarr from './Component/NavBarr/NavBarr';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Component/Home/Home';
import Recruiter from './DashBoards/Recruiter/Recruiter';
import Myposting from './DashBoards/Recruiter/Myposting/Myposting';
import Postjobs from './DashBoards/Recruiter/Postjobs/Postjobs';


const App = () => {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/recruiterDashboard' element={<Recruiter />} >
            <Route path='My_jobs' element={<Myposting/>}/>
            <Route path='My_post' element={<Postjobs/>}/>
        </Route>
        {/* <Route path='/recruiterDashboard' element={<Recruiter />} /></Route> */}
        
      </Routes>
    </div>
  );
};

export default App;
