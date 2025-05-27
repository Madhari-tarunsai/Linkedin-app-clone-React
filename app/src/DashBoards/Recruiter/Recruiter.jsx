import React from "react";
import Sidebarr from "./Sidebarr/Sidebarr";
import './Recruiter.css'
import {Outlet} from 'react-router-dom'
const Recruiter = () => {
  return (
    <div className="r-dashboard">
      <div className="sidebar">
        <Sidebarr />
      </div>
      <div className="main">
          <Outlet/>
      </div>
    </div>
  );
};

export default Recruiter;
