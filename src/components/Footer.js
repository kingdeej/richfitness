import React from 'react'
import facebook from '../images/icons/Facebook.png'
import instagram from '../images/icons/Instagram.png'
import pinterest from '../images/icons/Pinterest.png'
import tumblr from '../images/icons/Tumblr.png'
import whatsApp from '../images/icons/WhatsApp.png'

export default function Footer() {
  return (
    <footer className='footer ||  page-block-padding'>
        <div className="logo || page-inline-padding">RICH FITNESS</div>
        <div className="footer-cont || page-inline-padding  space-between">   
            <div className="left-footer">
                <h4>Contact</h4>
                <ul className='contact'>
                    <li>
                        <label htmlFor="tel">Tel:</label>
                        <a href='tel:850-555-5555' id='tel'>850-555-5555</a>
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
                <ul className="social-links || flex">
                    <li> <a href="#"><img src={tumblr} alt="tumblr" /></a></li>
                    <li><a href="#"><img src={whatsApp} alt="whatsApp" /></a></li>
                    <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
                    <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
                    <li><a href="#"><img src={pinterest} alt="pinterest" /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
