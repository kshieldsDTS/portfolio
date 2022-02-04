import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className="nav-wrapper">
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Nav;