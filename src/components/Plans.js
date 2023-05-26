import React from 'react'

export default function Plans() {
  return (
    <section className="plans || secondary-bg page-block-padding">
        <h2 className="primary-header">Pick Out A Plan</h2>
        <ul className="plans-cont || grid page-inline-padding">
            <li className="left-cont">
                <div className="header">
                    <h3>${20}</h3><span>Per Month</span>
                </div>
                <div className="body">
                    <h4>Beginner Plan</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                    <a className='secondary-button' href="#">Get Started</a>
                </div>
            </li>
            <li className="right-cont">
                <h3>Choose a Plan</h3>
                <ul className="plan-list-cont">
                    <li className="plan-item">
                        <p>Beginner</p>
                        <span className='active'></span>
                    </li>
                    <li className="plan-item">
                        <p>Intermediate</p>
                        <span></span>
                    </li>
                    <li className="plan-item">
                        <p>Pro</p>
                        <span></span>
                    </li>
                    <li className="plan-item">
                        <p>Expert</p>
                        <span></span>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}
