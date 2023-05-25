import React from 'react'

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper || page-inline-padding space-between vertical-align">
            <a href='/' className="logo">RICH FITNESS</a>
            <div className="right-nav || ">
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