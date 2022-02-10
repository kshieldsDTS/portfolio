import React from 'react';
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
			<section className='outer-container'>
				<section className='loader-container center-loader'>
					<div className='loader-div fade'>
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
					<div className='k kcenter'>
						<p className='ks'>KS</p>
					</div>
					<Link to='/about'>
						<div className='k k1 link'>
							<p>About</p>
						</div>
					</Link>
					<Link to='/projects'>
						<div className='k k2 link'><p>Projects</p></div>
					</Link>
					<a href='https://www.linkedin.com/in/kurt-shields/'>
						<div className='k k3 link'><p>LinkedIn</p></div>
					</a>
					<a href='https://github.com/kshieldsDTS'>
						<div className='k k4 link'><p>GitHub</p></div>
					</a>
					<a href='https://docs.google.com/document/d/1iY7mssUNmZMcF04_ohwP5wRmclty29W2N0QQZcIz2rc/edit?usp=sharing'>
						<div className='k k5 link'><p>Resume</p></div>
					</a>
					<div className='k k6 link'><p>???</p></div>
					<div className='flexcontainer-one'>
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
					<div className='flexcontainer-two'>
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
					<div className='flexcontainer-three'>
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
					<div className='flexcontainer-four'>
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
					<div className='flexcontainer-five'>
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
					<div className='flexcontainer-six'>
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