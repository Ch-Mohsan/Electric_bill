import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Bill from './pages/Bill';
import About from './pages/About';

function App() {
  return (
    <div className='myapp '>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/bills" element={<Bill />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
