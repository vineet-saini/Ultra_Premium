
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbox">
        <nav className="navbar">
        <div className="navbar-container">
            <div className="nav1">
                <div className='nav1'>
                <div className='up-logo'>
                    <b>ULTRA<span>PREMIUM</span></b>
                </div>
                <p>Psdfreebies.com</p>
                </div>
            </div>
            
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#join">Join</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            
                {/* <Link to="/home"><li>HOme</li></Link>
                <Link to="/join"><li>Join</li></Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link> */}
            
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </div>
        </nav>
    </div>
  );
};

export default Navbar;
