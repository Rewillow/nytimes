import React from "react";
import './Logo.css'
import logo from '../../img/LogoBlack.png'

const Logo = () => {
    return (
        <div className="navbar--logo">
            <a href="/"><img src={logo} alt="logo"></img></a>
        </div>
    )
}

export default Logo