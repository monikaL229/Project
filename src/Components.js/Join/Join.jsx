import React, { useRef } from 'react'
import './Join.css'
//import emailjs from '@emailjs/browser'

const Join = () => {
   /* const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1njhfqt', 'template_vqkiw5w', form.current, 'FuqbUJWTXIG_pWZ4O')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
*/
  return (
    
<div className="Join" id="join-us">
    <div className="left-j">
        <hr/>
<div>
    <span className='stroke-text'>READY TO</span>
    <span> LEVEL UP</span>
</div>
    
    <div>
    <span>YOUR BODY</span>
    <span className='stroke-text'> WITH US?</span>
</div>
</div>
{/* onSubmit={sendEmail} */}

    <div className="right-j">
        <form action='' className='email-container' >
            <input type='email' name='from_name' placeholder='enter your email address'/>
       <button className='btn-j'>Join now</button>
        </form>
    </div>


</div>
    )
}

export default Join;