import React from 'react'
import './Home.css'

export default function About() {
  return (
<div className="container min-vh-100 d-flex justify-content-center align-items-center">
  <div className="text-center w-100">
    <div className="row">
      <div className="col-12">
        <h3 className="fw-bold text-white fs-1 text-uppercase pt-4">About Component</h3>
        <hr className="seperate mb-3 mt-3"/>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-6">
        <p className="text-white px-3">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
        <div className="col-md-6">
        <p className="text-white px-3">
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
