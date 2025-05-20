import React from 'react';
import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import './hero.css'

function Hero() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel hero-container">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active circle" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="circle" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="circle" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={b1} className="d-block w-100" alt="Bill App Slide 1" />
          <div className="carousel-caption d-md-block hero-title">
            <h5>Smart Bill Tracking</h5>
            <p>Track and manage your electricity bills effortlessly in one place.</p>
            <a href="#" className="btn btn-info mt-3"><small>Explore Features</small></a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b2} className="d-block w-100" alt="Bill App Slide 2" />
          <div className="carousel-caption d-md-block">
            <h5>Reduce Your Costs</h5>
            <p>Analyze your energy usage and save on monthly bills.</p>
            <a href="#" className="btn btn-info mt-3"><small>Learn More</small></a>
          </div>
        </div>
        <div className="carousel-item ">
          <img src={b3} className="d-block w-100" alt="Bill App Slide 3" />
          <div className="carousel-caption d-md-block">
            <h5>Safe & Secure Payments</h5>
            <p>Pay your bills on time with our secure integrated system.</p>
            <a href="#" className="btn btn-info mt-3"><small>Start Now</small></a>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
