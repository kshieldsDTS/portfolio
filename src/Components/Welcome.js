import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
	const [radialOpen, setRadialOpen] = useState(false);
	function toggleRadial() {
		setRadialOpen(!radialOpen);
	}
	return (
		<section className='outer-container'>
			<section className='loader-container center-loader'>
				<div className='loader-div'>
					<div className='loader-div-inner'>
						<span className='one h6 loader-span' />
						<span className='two h3 loader-span' />
					</div>
				</div>
				<div className='loader-div fade'>
					<div className='loader-div-inner'>
						<span className='one h1 loader-span'></span>
						<span className='two h4 loader-span'></span>
					</div>
				</div>
				<div className='loader-div fade'>
					<div className='loader-div-inner'>
						<span className='one h5 loader-span' />
						<span className='one h2 loader-span' />
					</div>
				</div>
				<div className='k kcenter' onClick={toggleRadial}>
					<p className='ks'>KS</p>
				</div>
				<div className={!radialOpen ? 'pointer' : 'nopointer'}>
					<i className={!radialOpen ? 'arrow' : 'noarrow'}></i>
					<p className={!radialOpen ? 'click' : 'noclick'}>Tap the Hex</p>
				</div>
				<div className='radial-links'>
					<Link to='/about'>
						<div className={radialOpen ? 'k k1 link' : 'k k1 link k1-hidden'}>
							<p>About</p>
						</div>
					</Link>
					<Link to='/projects'>
						<div className={radialOpen ? 'k k2 link' : 'k k2 link k2-hidden'}>
							<p>Projects</p>
						</div>
					</Link>
					<a href='https://www.linkedin.com/in/kurt-shields/'>
						<div className={radialOpen ? 'k k3 link' : 'k k3 link k3-hidden'}>
							<p>LinkedIn</p>
						</div>
					</a>
					<a href='https://github.com/kshieldsDTS'>
						<div className={radialOpen ? 'k k4 link' : 'k k4 link k4-hidden'}>
							<p>GitHub</p>
						</div>
					</a>
					<a href='https://drive.google.com/file/d/1Gn6h0vSI9Ik3BmNXGS_qyc8CqGBF2zu0/view?usp=sharing'>
						<div className={radialOpen ? 'k k5 link' : 'k k5 link k5-hidden'}>
							<p>Resume</p>
						</div>
					</a>
					<Link to='/contact'>
						<div className={radialOpen ? 'k k6 link' : 'k k6 link k6-hidden'}>
							<p>Contact</p>
						</div>
					</Link>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-one-open'
							: 'flexcontainer flexcontainer-one-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-two-open'
							: 'flexcontainer flexcontainer-two-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-three-open'
							: 'flexcontainer flexcontainer-three-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-four-open'
							: 'flexcontainer flexcontainer-four-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-five-open'
							: 'flexcontainer flexcontainer-five-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
				<div
					className={`${
						radialOpen
							? 'flexcontainer-six-open'
							: 'flexcontainer flexcontainer-six-closed'
					}`}>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h6 loader-span' />
							<span className='two h3 loader-span' />
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h1 loader-span'></span>
							<span className='two h4 loader-span'></span>
						</div>
					</div>
					<div className='loader-div icon-one'>
						<div className='loader-div-inner'>
							<span className='one h5 loader-span' />
							<span className='one h2 loader-span' />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Welcome;
