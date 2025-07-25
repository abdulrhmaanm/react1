import React from 'react'
import avatar from './assets/avataaars.svg';
import './Home.css'

export default function Home() {
  return (

    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className=' d-flex justify-content-center align-items-center'>
            <div className=" text-center">
                <img className="w-75"  src={avatar} alt="avatar" />
                 <h3 className='fw-bold text-white fs-1 text-uppercase pt-4'>Start Framework</h3>
                 <hr className='seperate mb-3'/>
                 <span className=' text-white'>Graphic Artist - Web Designer - Illustrator</span>
            </div>
            
        </div>
      </div>
    </div>
  )
}
