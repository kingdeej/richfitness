import React from 'react'
import goals1 from '../images/goals1.png'
import goals2 from '../images/goals2.png'
import goals3 from '../images/goals3.png'

export default function Goals() {
  return (
    <section className="goals">
        <h2>Choose Your Own Goals</h2>
        <ul className="goals-cont">
            <li>
        3        <div className="goals-img-cont">
                    <img src={goals1} alt="" className="goals-img" />
                </div>
                <div className="goals-description-cont">
                    <h3>Strength</h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
            </li>
            <li>
                <div className="goals-img-cont">
                    <img src={goals2} alt="" className="goals-img" />
                </div>
                <div className="goals-description-cont">
                    <h3>Endurance</h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
            </li>
            <li>
                <div className="goals-img-cont">
                    <img src={goals3} alt="" className="goals-img" />
                </div>
                <div className="goals-description-cont">
                    <h3>Flexibility</h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
            </li>
        </ul>
    </section>
  )
}
