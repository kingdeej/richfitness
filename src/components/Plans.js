import React, { useState } from 'react'

export default function Plans() {
    const [plan, setPlan] = useState(1)
    const [active, setActive] = useState('active')
    function relSwitch(e){
        console.log(!e ?1: e);
        switch (plan) {
            case 1:
                return(
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
                )
            case 2:
                return(
                    <li className="left-cont">
                    <div className="header || primary-acc">
                        <h3 className='plan-header'>${25}<span>Per Month</span></h3>
                    </div>
                    <div className="body || plan-padding">
                        <h4 className='acc-line'>Intermediate Plan</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                        <a className='secondary-button' href="#">Get Started</a>
                    </div>
                </li>
                )
            case 3:
                return(
                    <li className="left-cont">
                    <div className="header || primary-acc">
                        <h3 className='plan-header'>${30}<span>Per Month</span></h3>
                    </div>
                    <div className="body || plan-padding">
                        <h4 className='acc-line'>Pro Plan</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                        <a className='secondary-button' href="#">Get Started</a>
                    </div>
                </li>
                )
            case 4:
                return(
                    <li className="left-cont">
                    <div className="header || primary-acc">
                        <h3 className='plan-header'>${30}<span>Per Month</span></h3>
                    </div>
                    <div className="body || plan-padding">
                        <h4 className='acc-line'>Expert Plan</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                        <a className='secondary-button' href="#">Get Started</a>
                    </div>
                </li>
                )
            default:
                break;
        }
    }
    return(
    <section className="plans || secondary-bg page-block-padding">
        <h2 className="primary-header">Pick Out A Plan</h2>
        <ul className="plans-cont || grid page-inline-padding">
            {relSwitch()}
            <li className="right-cont">
                <h3 className='plan-header acc-line'>Choose a Plan</h3>
                <ul className="plan-list-cont || plan-padding flex-direction-col space-between">
                    <li onClick={() => { setPlan(1) }} className="plan-item || space-between">
                        <p>Beginner</p>
                        <span className={plan === 1? 'active': ''}></span>
                    </li> 
                    <li onClick={() => { setPlan(2) }} className="plan-item || space-between">
                        <p>Intermediate</p>
                        <span className={plan === 2? 'active': ''}></span>
                    </li>
                    <li onClick={() => { setPlan(3)}} className="plan-item || space-between">
                        <p>Pro</p>
                        <span className={plan === 3? 'active': ''}></span>
                    </li>
                    <li onClick={() => { setPlan(4)}} className="plan-item || space-between">
                        <p>Expert</p>
                        <span className={plan === 4? 'active': ''}></span>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}
