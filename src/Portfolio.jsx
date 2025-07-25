import React from 'react'
import pic1 from './assets/poert1.png'
import pic2 from './assets/port2.png'
import pic3 from './assets/port3.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Portoflio.css'
import './Home.css'

export default function Portfolio() {
  return (
<div className="container vh-100 d-flex justify-content-center align-items-center">
  <div className="text-center w-100">
    <h3 className='fw-bold text-white fs-1 text-uppercase pt-5'>Portofolio component</h3>
    <hr className='seperate mb-3 pb-5'/>


    <div className="row g-4 mb-3">
      <div className="col-md-4  ">
        <div>
            <img className='img-fluid p-0 border-0 rounded-3 ' src={pic1} alt="pic1" />
        </div>
      </div>

            <div className="col-md-4">
        <div>
            <img className=' img-fluid p-0 border-0 rounded-3 ' src={pic2} alt="pic1" />
        </div>
      </div>

            <div className="col-md-4">
        <div>
            <img className=' img-fluid p-0 border-0 rounded-3 ' src={pic3} alt="pic1" />
        </div>
      </div>
    </div>

        <div className="row g-4 mb-3">
      <div className="col-md-4  ">
        <div>
            <img className='img-fluid p-0 border-0 rounded-3 ' src={pic1} alt="pic1" />
        </div>
      </div>

            <div className="col-md-4">
        <div>
            <img className=' img-fluid p-0 border-0 rounded-3 ' src={pic2} alt="pic1" />
        </div>
      </div>

            <div className="col-md-4">
        <div>
            <img className=' img-fluid p-0 border-0 rounded-3 ' src={pic3} alt="pic1" />
        </div>
      </div>
    </div>

    

  </div>
</div>
  )
}