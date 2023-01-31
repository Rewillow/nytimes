import React from "react";
import './Logo.css'
import logo from '../img/LogoBlack.png'

const Logo = () => {
    return (
        <div className="navbar--logo">
            <img src={logo} alt="logo"></img>
        </div>
    )
}

export default Logo