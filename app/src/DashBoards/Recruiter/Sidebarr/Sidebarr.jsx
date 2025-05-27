import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebarr.css'

const Sidebarr = () => {
  return (
    <div className='sider-links'>
        <Link to='My_post' className='p1'>Posting job</Link>
         <Link to='My_jobs' className='p2'>My posting</Link>
          
    </div>
  )
}

export default Sidebarr