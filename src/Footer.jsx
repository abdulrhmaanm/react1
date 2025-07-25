import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='bg-dark pb-5'>
      <div className="container">
        <div className="row pt-5">
            <div className="col-md-4 text-center d-flex flex-column g-5">
                <h3 className=' text-uppercase text-white'>Location</h3>
                <span className='text-white'>2215 John Daniel Drive</span>
                <span className='text-white'>Clark, MO 65243</span>
            </div>
            <div className="col-md-4 text-center d-flex flex-column g-5">
                <h3 className=' text-uppercase text-white'>Around the web</h3>
                <div className="pt-3">
                    
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white mx-2" />
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white mx-2" />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white mx-2"  />
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white mx-2" />
                </div>
            </div>
            <div className="col-md-4 text-center d-flex flex-column g-5">
                <h3 className=' text-uppercase text-white'>About freelancer</h3>
                <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}
