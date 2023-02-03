import React from "react";
import './Navbar.css'
import {FaTimes, FaBars} from "react-icons/fa"

import { Link } from 'react-router-dom';


const Navbar = () => {

   const navRef = React.useRef()

   const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
   }

    return (
              <header>
                <nav ref={navRef}>
                <li><Link to="/" className="nav-links" onClick={showNavbar} >Home</Link></li>
                <li><Link to="/world" className="nav-links" onClick={showNavbar}>World</Link></li>
                <li><Link to="/U.S." className="nav-links" onClick={showNavbar}>U.S.</Link></li>
                <li><Link to="/business" className="nav-links" onClick={showNavbar}>Business</Link></li>
                <li><Link to="/tech" className="nav-links" onClick={showNavbar}>Tech</Link></li>
                <li><Link to="/health" className="nav-links" onClick={showNavbar}>Health</Link></li>
                <li><Link to="/sports" className="nav-links" onClick={showNavbar}>Sports</Link></li>
                <li><Link to="/arts" className="nav-links" onClick={showNavbar}>Arts</Link></li>
                <li><Link to="/books" className="nav-links" onClick={showNavbar}>Books</Link></li>
                <li><Link to="/style" className="nav-links" onClick={showNavbar}>Style</Link></li>
                <li><Link to="/travel" className="nav-links" onClick={showNavbar}>Travel</Link></li>
                <li><Link to="/magazine" className="nav-links" onClick={showNavbar}>Magazine</Link></li>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes /></button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}> <FaBars /></button>
              </header>
    )
}

export default Navbar