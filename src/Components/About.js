import React from 'react';

function About(props) {
    return (
			<div className='about-wrapper'>
                <div className="p-wrapper">
				    <p className='about-p about-p-one'>
					Hi! The name's Kurt and I have a passion for creating and designing
				    apps that will live on the internet. My software engineering journey
				    began in 2005, in a cramped, repurposed US Army office in the heart of
				    Seoul, Korea. The first tastes of HTML, CSS, and JavaScript would
				    eventually entice me into pursuing a career in software engineering.
				    </p>
                    <div className='gold-one'></div>
                </div>
                <div className='gold-two'></div>
                <div className='p-wrapper'>
                    <div className='gold-one'></div>
                <p className='about-p about-p-two'>
                    While my life took me on a detour down a different industry for over a decade, I have returned to my first passion. I began by getting caught up with an intense Software Engineering Immersive at General Assembly, and I am looking forward to starting my career in the exciting and fast paced software development industry.
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