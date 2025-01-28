import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import lefrArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
    const[selected,setselected]=useState(0);
    const tlength= testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
           <span> Say about us</span>

           <span>
            {testimonialsData[0].review}
           </span>

           <span>
                    <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>{" "}
                     -{testimonialsData[selected].status}
           </span>
        </div>
        <div className="right-t">
           <div></div>
           <div></div> <img src={testimonialsData[selected].image} alt=''/>
       <div className="arrows">

        <img onClick={()=>{
            selected===0
            ?setselected(tlength-1 )
            :setselected((prev)=> prev - 1);
        }}

        src={lefrArrow} alt=''/>
        <img 
        onClick={()=>{
            selected=== tlength-1
            ?setselected(0)
            :setselected((prev)=>prev + 1);
        }}
        src={RightArrow} alt=''/>

       </div>
       
       
        </div>

    </div>

  )
}

export default Testimonials
