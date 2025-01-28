import React from 'react';
import Logo from '../../assets/logo.png';
import './Header.css'

const Header =() =>{
    return (
        <div className="header">
            <img className='logo' alt= ""  src={Logo}/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why uS</li>
            <li>Plans</li>
            <li>Testimoinals</li>
        </ul>
        </div>
    )
}
export default Header;
