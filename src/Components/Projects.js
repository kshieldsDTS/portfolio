import React from 'react';

function Projects(props) {
    return (
			<div className='projects-wrapper'>
				<p>Towers of Hanoi</p>
				<img
					className='project-preview'
					src='https://github.com/kshieldsDTS/towers-of-hanoi/blob/main/assets/towers-of-hanoi.png?raw=true'
					alt='Kurt and Tofu'></img>
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