import React from 'react'
import barbell from '../images/icons/Barbell.png'
import apple from '../images/icons/Apple.png'
import airport from '../images/icons/Airport Security.png'
import acrobatics from '../images/icons/Acrobatics.png'

export default function Offer() {
  return (
    <section className="offer || primary-bg page-block-padding">
        <h2 className='primary-header'>Services We Offer</h2>
        <ul className="offer-cont || flex flex-center space-between page-inline-padding">
            <li className="offer-card">
                <div className="top-icon">
                    <img className='position-center' src={barbell} alt="" />
                </div>
                <h4>Personal Training</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
                <a href="#">Read More...</a>
            </li>
            <li className="offer-card">
                <div className="top-icon">
                    <img className='position-center' src={apple} alt="" />
                </div>
                <h4>Dietary Plans</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
                <a href="#">Read More...</a>
            </li>
            <li className="offer-card">
                <div className="top-icon">
                    <img className='position-center' src={airport} alt="" />
                </div>
                <h4>Body Scans</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
                <a href="#">Read More...</a>
            </li>
            <li className="offer-card">
                <div className="top-icon">
                    <img className='position-center' src={acrobatics} alt="" />
                </div>
                <h4>Recovery Programs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
                <a href="#">Read More...</a>
            </li>
        </ul>
    </section>
  )
}
