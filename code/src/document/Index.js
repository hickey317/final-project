import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import './Index.css'

const  Index = () => {
	const location = useLocation();
	
  return (
    <div className="nav-container">
      <h1 className="nav-title">Rock Climbing Community</h1>
      <ul className="nav-list">
        <li><Link to="/enjoy">Enjoy Climbing</Link></li>
        <li><Link to="/">Record Climbing</Link></li>
        <li class={location.pathname === '/achievements' ? 'active' : ''}>
					<Link to="/achievements">My Achievements</Link>
				</li>
      </ul>
    </div>
  )
}

export default Index
