import React from 'react'

export default function Plans() {
  return (
    <section className="plans || secondary-bg page-block-padding">
        <h2 className="primary-header">Pick Out A Plan</h2>
        <ul className="plans-cont || grid page-inline-padding">
            <li className="left-cont">
                <div className="header || primary-acc">
                    <h3 className='plan-header'>${20}<span>Per Month</span></h3>
                </div>
                <div className="body || plan-padding">
                    <h4 className='acc-line'>Beginner Plan</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                    <a className='secondary-button' href="#">Get Started</a>
                </div>
            </li>
            <li className="right-cont">
                <h3 className='plan-header acc-line'>Choose a Plan</h3>
                <ul className="plan-list-cont || plan-padding flex-direction-col space-between">
                    <li className="plan-item || space-between">
                        <p>Beginner</p>
                        <span className='active'></span>
                    </li>
                    <li className="plan-item || space-between">
                        <p>Intermediate</p>
                        <span></span>
                    </li>
                    <li className="plan-item || space-between">
                        <p>Pro</p>
                        <span></span>
                    </li>
                    <li className="plan-item || space-between">
                        <p>Expert</p>
                        <span></span>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}
