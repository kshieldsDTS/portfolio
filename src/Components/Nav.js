import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    function hamburgerClick(){
        if (props.openMenu) {
            props.setOpenMenu(false)
        } else {
            props.setOpenMenu(true)
        }
    }
    return (
        <div className="nav-wrapper">
            <div className="header-wrapper">
                <span className="name-span">Kurt Shields</span> 
                <span className="title-span">Software Engineer</span>   
            </div>
            {!props.openMenu ? <button onClick={hamburgerClick}>Hamburger Menu</button> :
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