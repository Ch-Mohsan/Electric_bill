import React, { useState } from 'react';
import signupImage from '../assets/images/signup.png'; 
const uri='http://localhost:5000/api/users/signup'
import { useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';


function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);
    try {                
      const response = await fetch(uri, {
  method: "POST",
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(signUpData) 
});

const data= await response.json()


      if(response.ok){
        toast.success(data.message)
        navigate('/login')
      }
      else{
        console.log(data)
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  };

  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded">
        <div className="col-md-6 p-0">
          <img
            src={signupImage}
            alt="Sign Up"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', borderRadius: '0.375rem 0 0 0.375rem' }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h3 className="text-center text-success mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={signUpData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={signUpData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={signUpData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={signUpData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
