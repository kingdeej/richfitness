import React, { useState } from 'react'
import navIcon from '../images/icons/nav-icon.svg'

function Nav() {
  const [hide, setHide] = useState('')
  const [active, setActive] = useState('deactivate')
  const [navClose, setNavClose] = useState('nav-close')
  function toggle(){
    if (hide === 'hide') {
      setHide('')
    }
    if(hide === ''){
      setHide('hide') 
    }    
    if (active === 'deactivate') {
      setActive('activate')
    }
    if (active === 'activate') {
      setActive('deactivate')
    }
  }
  return (
    <nav>
        <div className="nav-wrapper || page-inline-padding space-between vertical-align">
            <a href='/' className="logo">RICH FITNESS</a>
            <div className="right-nav || ">
              <div className={`nav-icon-cont  ${active}`} onClick={toggle}>
                <img src={navIcon} id='nav-icon-1' className={`nav-icon ${hide}`} alt="nav-icon" />
                <img src={navIcon} id='nav-icon-2' className={`nav-icon ${hide}`} alt="nav-icon" />
              </div>
              <div onClick={toggle} className={`${navClose} ${hide}`}></div>
              <div className={`nav-links-wrapper ${hide}`}>
                <ul className={`nav-links || flex`}>
                  <li><a href="#" className="nav-link">Programs</a></li>
                  <li><a href="#" className="nav-link">Pricing</a></li>
                  <li><a href="#" className="nav-link">Set Goals</a></li>
                  <li><a href="#" className="nav-link">About Us</a></li>
                </ul>       
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav