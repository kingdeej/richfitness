import React from 'react'
import navIcon from '../images/icons/nav-icon.svg'

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper || page-inline-padding space-between vertical-align">
            <a href='/' className="logo">RICH FITNESS</a>
            <div className="right-nav || ">
              .nav
              <img src="" className='nav-icon' alt="" />
                <ul className="nav-links || flex ">
                  <li><a href="#" className="nav-link">Programs</a></li>
                  <li><a href="#" className="nav-link">Pricing</a></li>
                  <li><a href="#" className="nav-link">Set Goals</a></li>
                  <li><a href="#" className="nav-link">About Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav