import React from 'react'

export default function Contact() {
  return (
<div className="container vh-100 ">
  <div className="text-center w-100 mt-5">
    <h3 className='fw-bold text-white fs-1 text-uppercase pt-5'>Contact component</h3>
    <hr className='seperate mb-3 pb-5'/>
  </div>
  <div className='d-flex flex-column'>
    < input type="text" placeholder='Name' className='form-control mb-3' />
    < input type="number" placeholder='Age' className='form-control mb-3' />
    < input type="email" placeholder='Email' className='form-control mb-3' />
    < input type="password" placeholder='Password' className='form-control mb-3' />
  </div>
  <div className="d-flex justify-content-center w-100">
    <button type="submit" className="btn btn-light">Submit</button>
  </div>

</div>
  )
}
