import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    function handleClick(){
        if (props.openMenu) {
            props.setOpenMenu(false)
        } else {
            props.setOpenMenu(true)
        }
    }
    return (
        <div className='nav-wrapper'>
        <div className="horizontal-wrapper">
            <div className="header-wrapper">
                <span className="name-span">Kurt Shields</span> 
                <span className="title-span">Software Engineer</span>   
            </div>
            {/* {!props.openMenu ? <button className="hamburger" onClick={handleClick}>Hamburger Menu</button> :
            <div className="links-wrapper">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                <button className="hamburger" onClick={handleClick}>X</button>    
            </div>} */}
            <div className="hb-wrapper" onClick={handleClick}>
                <div className={!props.openMenu ? 'hb-line hb-top' : 'hb-line hb-top-change'}></div>
                <div className={!props.openMenu ? 'hb-line hb-middle' : 'hb-line hb-middle-change'}></div>
                <div className={!props.openMenu ? 'hb-line hb-bottom' : 'hb-line hb-bottom-change'}></div>
                
            </div>
        </div>
        <nav className={props.openMenu ? 'expanded-menu show-menu' : 'expanded-menu closed-menu'}>
            <ul className='link-list'>
                <Link to='/about'>
                    <li className={props.openMenu ? 'navlink link-one' : 'hidden'}>About Me</li>    
                </Link>
                
                <li className={props.openMenu ? 'navlink link-two' : 'hidden-nav-link'}>Portfolio</li>
                <li className={props.openMenu ? 'navlink link-three' : 'hidden-nav-link'}>Contacts</li>
            </ul>
        </nav>
        </div>
    );
}

export default Nav;