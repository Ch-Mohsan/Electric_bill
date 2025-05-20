import React, { useState } from 'react';
import loginImage from '../assets/images/login.png'; 
const uri='http://localhost:5000/api/users/login'
import { useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    try {                
      const response = await fetch(uri, {
  method: "POST",
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(loginData) 
});
const data= await response.json()
      if(response.ok){
        toast.success(data.message)
        navigate('/')
      }
      else{
        toast.error(data.error)
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
            src={loginImage}
            alt="Login"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', borderRadius: '0.375rem 0 0 0.375rem' }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h3 className="text-center text-primary mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={loginData.email}
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
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
