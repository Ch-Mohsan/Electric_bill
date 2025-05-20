import React from 'react';
import aboutImage from '../assets/images/about.png'; 

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src={aboutImage} 
            alt="About Bill Manager" 
            className="img-fluid rounded shadow" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary mb-3">About Bill Manager</h2>
          <p>
            Our Bill Management System simplifies tracking and managing monthly electricity bills. 
            Whether you're monitoring customer readings, amounts due, or billing months, this tool 
            ensures all your billing data is organized in one place. You can add new bills, view 
            previous entries, and analyze average usage and expenses efficiently.
          </p>
          <p>
            Built with React and a powerful backend, this app is designed for utility companies, 
            admins, or individuals who want a clean and efficient way to manage billing records.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
