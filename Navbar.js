import React from 'react'
import  './Navbar.css';
import { useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Navbar() {
    const navRef=useRef();

    const showNavbar = () =>
    {
        // navRef.current.classList.toggle("responsive_nav");
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <>
        <header>
            <nav ref={navRef}>
                <h1><i className='fa fa-cutlery'/></h1>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                        <i className='fa fa-times'/>
                </button>
                    <a href="/#">Home</a>
                    <a href="/#">Why Food?</a>
                    <a href="/#">Location</a>
                    <a href="/#">Services</a>

            </nav>
            <div className='next'>
                <button  className="nav-btn" onClick={showNavbar}>
                        <i className='fa fa-bars'/>
                </button>
                <h2><i className='fa fa-cutlery'/></h2>
            </div>
            <div>
            </div>
        </header>
    </>
  )
}

export default Navbar;
