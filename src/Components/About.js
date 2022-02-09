import React from 'react';

function About(props) {
    return (
			<div className='about-wrapper'>
				<div className='p-wrapper'>
					<p className='about-p about-p-one'>
						Hello there! My name's Kurt and I have a passion for creating and
						designing web apps! My software engineering journey began in 2005 in
						the heart of Korea. As a fresh graduate from high school, I began
						learning JavaScript and HTML in a cramped, repurposed office that
						once belonged to the Army. These first tastes of coding would shape
						my need to tinker with everything around me, and would eventually
						lead me back to the world of software engineering.
					</p>
					<div className='gold-one'></div>
				</div>
				<div className='gold-two'></div>
				<div className='p-wrapper'>
					<div className='gold-one'></div>
					<p className='about-p about-p-two'>
						While my life took me on a detour into private security industry for
						over a decade, I have never lost the passion for code or tinkering.
						Following the events of 2020, I felt it was time for a change. I
						began by getting started up with an intense Software Engineering
						Immersive at General Assembly, where I was able to sharpen my
						skills. I am looking forward to starting my career in the exciting
						and fast paced software development industry and creating things that live on the internet!
					</p>
				</div>
				<div className='skills'>
					<p className='skills-header'>I've recently been using:</p>
					<ul className='skills-wrapper'>
                        
						<li className='skills-list'>
                            <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'>
							<img
								className='icon'
								src='https://i.imgur.com/Cl5akFQ.png'
								alt='React Icon'></img>
							<p>React</p>
                            </a>
						</li>
						<li className='skills-list'>
                            <a href='https://en.wikipedia.org/wiki/JavaScript'>
							<img
								className='icon'
								src='https://i.imgur.com/rcWjpbT.png'
								alt='JavaScript Icon'></img>
							<p>JavaScript</p>
                            </a>
						</li>   
						<li className='skills-list'>
                            <a href='https://en.wikipedia.org/wiki/Python_(programming_language)'>
							<img
								className='icon'
								src='https://i.imgur.com/tbm9nyn.png'
								alt='Python Icon'></img>
							<p>Python</p>
                            </a>
						</li>
						<li className='skills-list'>
                            <a href='https://en.wikipedia.org/wiki/PostgreSQL'>
							<img
								className='icon'
								src='https://i.imgur.com/0WbjLwz.png'
								alt='Postgres Icon'></img>
							<p>PostgreSQL</p>
                            </a>
						</li>
						<li className='skills-list'>
                            <a href='https://en.wikipedia.org/wiki/MongoDB'>
							<img
								className='icon'
								src='https://i.imgur.com/TuGxmkk.png'
								alt='MongoDB Icon'></img>
							<p>MongoDB</p>
                            </a>
						</li>
					</ul>
				</div>
			</div>
		);
}

export default About;