import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="logo-footer">RICH FITNESS</div>
        <div className="footer-cont">   
            <div className="left-footer">
                <h4>Contact</h4>
                <ul className='contact'>
                    <li>
                        <label htmlFor="tel">Tel:</label>
                        <p id='tel'>850-555-5555</p>
                    </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <p id='email'>richfitness@email.com</p>
                    </li>
                    <li>
                        <label htmlFor="address">Address:</label>
                        <p id='address'>
                            192 Fitness Dixon Drive
                            Fortwalton Beach,
                            Florida 32548
                        </p>
                    </li>
                </ul>
                <div className="copywright">
                    <p>Copyright 2023 </p>
                </div>
            </div>
            <div className="right-footer">
                <h4>Socials</h4>
                <ul className="social-links">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
