import React from "react";
import logoWhite from "../img/LogoWhite.png"
import './Logo.css'

const LogoWhite = () => {
    return (
        <div className="navbar--logo">
            <img src={logoWhite} alt="logo"></img>
        </div>
    )
}

export default LogoWhite