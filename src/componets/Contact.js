import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2 className='text-center'>Contact Us</h2>
      <div className="form">
        <input className="form-input"  type="text" name='name' id='name' placeholder='Enter Your name' />
        <input className="form-input"  type="text" name='phone' id='phone' placeholder='Enter Your phone number' />
        <input className="form-input"  type="Email" name='emial' id='email' placeholder='Enter Your Email' />
        <textarea className="form-input"  name="text" id="" cols="30" rows="10" placeholder='Elaborate your concern'></textarea>
        <button className="btn btn-dark">Submit</button>
      </div>
    </div>
  )
}

export default Contact;