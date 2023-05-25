import React from 'react'
import heroImage from '../images/heroImage.png'
import weightlift from '../images/Weightlifting.png'
import Nav from './Nav'

export default function Hero() {
  return (
    <section className="hero">
        <Nav />
        <div className="hero-wrapper || page-inline-padding vertical-align">
            <div className="left-hero">
                <h1>GET FIT, STAY RICH</h1>
                <h3>We have the best and most practical programs for any and everyone at every size.</h3>
                <a href="#" className="primary-button">Get Started</a>
            </div>
            <div className="right-hero">
                <img src={heroImage} alt="hero-image" className="hero-image" />
            </div>
            <img src={weightlift} alt="" className="hero-back-img" />
        </div>
        <div className="hero-triangle || secondary-bg"></div>
    </section>
  )
}
