import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebarr.css'

const Sidebarr = () => {
  return (
    <div className='sider-links'>
        <Link to='Posting'>Posting</Link>
         <Link to='My Jobs'>My Jobs</Link>
          <Link to='my Posts'>my Posts</Link>
    </div>
  )
}

export default Sidebarr