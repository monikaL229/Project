import React from 'react'
import './Program.css'
import{programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Program=() =>{
  return (
<div className='Programs' id="programs">
  {/* header */}
  
  <div className='Programs-header'>
    <span className='stroke-text'>Exploure Our</span>
    <span>Programs</span>
    <span>to shape you</span>
  </div>

  <div className='Program-categories'>
    {programsData.map((Program) =>(
      <div className='category'>
        {Program.image}
        <span>{Program.heading}</span><span>{Program.details}</span>

        <div className="join now"><span>Join Now</span><img src={RightArrow} alt=''/></div>
      </div>
    ))}
  </div>
</div>

)
}

export default Program;