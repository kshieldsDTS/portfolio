import React from 'react';

function About(props) {
    return (
			<div className='about-wrapper'>
                <div className="p-wrapper">
				    <p className='about-p about-p-one'>
                        Hello there! My name's Kurt and I have a passion for creating and designing web apps! My software engineering journey began in 2005 in the heart of Korea. As a fresh graduate from high school, I began learning JavaScript and HTML in a cramped, repurposed office that once belonged to the Army. These first tastes of coding would shape my need to tinker with everything around me, and would eventually lead me back to the world of software engineering.
				    </p>
                    <div className='gold-one'></div>
                </div>
                <div className='gold-two'></div>
                <div className='p-wrapper'>
                    <div className='gold-one'></div>
                <p className='about-p about-p-two'>
                    While my life took me on a detour into private security industry for over a decade, I have never lost the passion for code or tinkering. Following the events of 2020, I felt it was time for a change. I began by getting started up with an intense Software Engineering Immersive at General Assembly, where I was able to sharpen my skills. I am looking forward to starting my career in the exciting and fast paced software development industry!
                </p>
                </div>
                <div>
                    I've recently been using: 
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>PostgresSQL</li>
                        <li>MongoDB</li>     
                    </ul>
                </div>	
			</div>
		);
}

export default About;