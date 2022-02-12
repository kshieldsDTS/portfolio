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
				<div className='horizontal-wrapper'>
					<Link to='/'>
						<div className='header-wrapper'>
							<span className='name-span'>Kurt Shields</span>
							<span className='title-span'>Software Engineer</span>
						</div>
					</Link>
					<div className='hb-wrapper' onClick={handleClick}>
						<div className='line-wrap'>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-top-left'
										: 'hb-line hb-top-left-change'
								}></div>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-top-right'
										: 'hb-line hb-top-right-change'
								}></div>
						</div>
						<div className='line-wrap'>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-middle-left'
										: 'hb-line hb-middle-left-change'
								}></div>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-middle-right'
										: 'hb-line hb-middle-right-change'
								}></div>
						</div>
						<div className='line-wrap'>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-bottom-left'
										: 'hb-line hb-bottom-left-change'
								}></div>
							<div
								className={
									!props.openMenu
										? 'hb-line hb-bottom-right'
										: 'hb-line hb-bottom-right-change'
								}></div>
						</div>
					</div>
				</div>
				<nav className={props.openMenu ? 'menu show-menu' : 'menu closed-menu'}>
					<ul className='link-list'>
						<Link to='/about'>
							<li
								className={
									props.openMenu
										? 'navlink link-one'
										: 'navlink hidden-nav-link-one'
								}
								onClick={handleClick}>
								<p>About Me</p>
							</li>
						</Link>
						<Link to='/projects'>
							<li
								className={
									props.openMenu
										? 'navlink link-two'
										: 'navlink hidden-nav-link-two'
								}
								onClick={handleClick}>
								<p>Projects</p>
							</li>
						</Link>
						<Link to='/contact'>
							<li
								className={
									props.openMenu
										? 'navlink link-three'
										: 'navlink hidden-nav-link-three'
								}
								onClick={handleClick}>
								<p>Contacts</p>
							</li>
						</Link>
						<a href='https://drive.google.com/file/d/1QQkEYF94tr0VKS1mF43Re-R0AZyL6uAN/view?usp=sharing'>
							<li
								className={
									props.openMenu
										? 'navlink link-four'
										: 'navlink hidden-nav-link-four'
								}
								onClick={handleClick}>
								<p>Resume</p>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		);
}

export default Nav;