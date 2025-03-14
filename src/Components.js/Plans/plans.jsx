import React from 'react'
import './plans.css'

import{plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans=() =>{
  return (

    <div className="plans-container">

<div className="blur plans-blur-1"></div>

<div className="blur plans-blur-2"></div>

<div className='hero-text'>
               <div>
                  <span className='stroke-text'>READY TO START </span>
                  
               </div><div> <span>YOUR JOURNEY</span> <span className='stroke-text'>NOW WITHUS</span></div>
              </div>


        {/* card */}
        <div className="plans">
            {plansData.map((plan, i) =>(
            
                            <div className="plan" key={i}>
                                {plan.icon}
                                <span>{plan.name}</span>
                                <span>${plan.price}</span>
            
            <div className="features">
                {plan.features.map((feature, i)=>
                (
                    <div className='feature'>
                        <img src={whiteTick} alt=""/>
                        <span key={i}>{feature}</span>
                        </div>
                 ))}
            </div>

            <div><span>See more benifits  </span>
            </div>

            <button className="btn">join now</button>

                            </div>
            ))}
            </div>
    </div>

    )
}

export default Plans;