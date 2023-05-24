import React from 'react'

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper">
            <div className="logo">RICH FITNESS</div>
            <div className="right-nav">
                <ul className="nav-links">
                    <li className="nav-link">Programs</li>
                    <li className="nav-link">Pricing</li>
                    <li className="nav-link">Set Goals</li>
                    <li className="nav-link">About Us</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav