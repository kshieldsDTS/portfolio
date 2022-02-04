import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav(props) {
    const [openMenu, setOpenMenu] = useState(false)
    function hamburgerClick(){
        if (openMenu) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }
    return (
        <div className="nav-wrapper">
            <div className="header-wrapper">
                <span className="name-span">Kurt Shields</span> 
                <span className="title-span">Software Engineer</span>   
            </div>
            {!openMenu ? <button onClick={hamburgerClick}>Hamburger Menu</button> :
            <div className="links-wrapper">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={hamburgerClick}>X</button>    
            </div>}
            
        </div>
    );
}

export default Nav;