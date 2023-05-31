import React from 'react';

function Projects(props) {
    return (
			<div className='projects-wrapper'>
				<p>Fifth Edition Text Adventure</p>
				<img
					className='project-preview'
					src='https://user-images.githubusercontent.com/94239332/148842479-c1c0eaa8-feaf-4933-8dd9-35f44493f820.png'
					alt='A screenshot of the Fifth Edition Text Adventure game in play.'></img>
				<p>React, JavaScript, HTML, CSS</p>
				<p>
					A choose-your-own-adventure text based game utilizing API calls to
					generate encounter parameters. Based on classic turn-based games such
					as Dungeons and Dragons or other JRPGs.
				</p>
				<a
					href='https://github.com/kshieldsDTS/fifth-edition-text-adventure'
					target='_blank'
					rel='noopener noreferrer'>
					GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://hydraxus.netlify.app/'
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
				<p>Towers of Hanoi</p>
				<img
					className='project-preview'
					src='https://github.com/kshieldsDTS/towers-of-hanoi/blob/main/assets/towers-of-hanoi.png?raw=true'
					alt='A screenshot of the Towers of Hanoi game in play.'></img>
				<p>JavaScript, HTML, CSS</p>
				<p>
					A simple in-browser recreation of the classic towers of Hanoi game.
					Complete with logic, win conditions, and prevents illegal moves.
				</p>
				<a
					href='https://github.com/kshieldsDTS/towers-of-hanoi'
					target='_blank'
					rel='noopener noreferrer'>
					GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://kshieldsdts.github.io/towers-of-hanoi/'
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
			</div>
		);
}

export default Projects;