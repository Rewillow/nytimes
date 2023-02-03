import React from "react";
import './Footer.css'
import logowhite from '../../img/LogoWhite.png'


// SOCIAL ICON
import {BsInstagram} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'



const Footer = () => {
    return (
        <footer className="footer--container">
            <div className="footer--title">
            <a href="/"><img src={logowhite} className="footer--logo" alt="logo"></img></a> 
            </div>
            <div className="footer--sections">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="world">World</a></li>
                <li><a href="us">U.S.</a></li>
                <li><a href="business">Business</a></li>
                <li><a href="technology">Tech</a></li>
                <li><a href="health">Health</a></li>
                <li><a href="sports">Sports</a></li>
                <li><a href="arts">Arts</a></li>
                <li><a href="books">Books</a></li>
                <li><a href="style">Style</a></li>
                <li><a href="travel">Travel</a></li>
                <li><a href="magazine">Magazine</a></li>
            </ul>
            <div className="footer--social">
            <a href="https://www.facebook.com/nytimes/"><FiFacebook className="facebook--icon"/></a>
            <a href="https://www.instagram.com/nytimes/"><BsInstagram className="instagram--icon"/></a>
            <a href="https://twitter.com/nytimes"><FiTwitter className="twitter--icon"/></a>
            </div>
            </div>
            <div className="copyright--section">
            <p>@Copyright 2023, Samuele Gugliotta</p>
            </div>
        </footer>
    )
}

export default Footer