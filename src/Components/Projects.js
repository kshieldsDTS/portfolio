import React from 'react';

function Projects(props) {
    return (
			<div className='projects-wrapper'>
				<p>MKS</p>
				<img
					className='project-preview'
					src='https://user-images.githubusercontent.com/94239332/154572842-bbdc77bc-6ff7-42e3-a56d-cd61457cf1b4.png'
					alt='A listing of work on an online job board.'></img>
				<p>JavaScript, HTML, CSS, MongoDB, Express, React, Node, bcrypt, JSON Web Token</p>
				<p>
					A blog site for a movie and television critic and reviewer. Utilizes bcrypt to hash and protect user information, while using JSON Web Token to prevent unauthorized editing or changes to the site.
				</p>
				<a
					href='https://github.com/kshieldsDTS/mks-project'
					target='_blank'
					rel='noopener noreferrer'>
					Front End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://github.com/kshieldsDTS/mks-back'
					target='_blank'
					rel='noopener noreferrer'>
					Back End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://mks-blog.netlify.app/'
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
				<p>inDecoders</p>
				<img
					className='project-preview'
					src='https://user-images.githubusercontent.com/94239332/154572842-bbdc77bc-6ff7-42e3-a56d-cd61457cf1b4.png'
					alt='A listing of work on an online job board.'></img>
				<p>JavaScript, HTML, CSS, NoSQL, Django REST Frameworks, React, Node</p>
				<p>
					An online job board for software developers and content creators.
					Users can sign up, post that they are looking for work, or that they
					may be looking for additional hands to work on a project of their own.
					Hosting issues are preventing API calls at the moment.
				</p>
				<a
					href='https://github.com/kshieldsDTS/inDecoders-front'
					target='_blank'
					rel='noopener noreferrer'>
					Front End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://github.com/kshieldsDTS/inDecoders-back'
					target='_blank'
					rel='noopener noreferrer'>
					Back End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://indecoders.netlify.app/'
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
				<p>Agiliteam Kanban Planner</p>
				<img
					className='project-preview'
					src='https://user-images.githubusercontent.com/93807931/151850324-b7fbf870-3ab6-47e2-84e2-4f53a75ff9ce.png'
					alt='A kanban style project board'></img>
				<p>JavaScript, HTML, CSS, MongoDB, Express, React, Node</p>
				<p>
					A kanban style project management board utilizing a MERN stack to
					catalogue and update tasks. A user login system prevents unauthorized
					users from making edits to the project. Hosting issues are preventing
					API calls at the moment.
				</p>
				<a
					href='https://github.com/kshieldsDTS/agiliteam-front-end'
					target='_blank'
					rel='noopener noreferrer'>
					Front End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://github.com/kshieldsDTS/agiliteam-back-end'
					target='_blank'
					rel='noopener noreferrer'>
					Back End GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href='https://agiliteam.netlify.app/'
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
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