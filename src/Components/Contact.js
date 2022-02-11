import React from 'react';

function Contact(props) {
    return (
			<div className='contacts-outer-container'>
				<p className='contact-blurb'>
					Get in touch with me! I'd love to talk about programming, gaming, or
					anything else you can think of!
				</p>
				<a href='mailto:kurtshields.42@gmail.com'>
					<div className='contact-container'>
						<img src='https://i.imgur.com/TA0xNIC.png' alt='Email Icon' />
						<div className='contact-details'>
							<h3>Email:</h3>
							<p>kurtshields.42@gmail.com</p>
						</div>
					</div>
				</a>
				<a href='https://www.linkedin.com/in/kurt-shields/'>
					<div className='contact-container'>
						<img src='https://i.imgur.com/NcW4TKG.png' alt='LinkedIn Icon' />
						<div className='contact-details'>
							<h3>LinkedIn:</h3>
							<p>linkedin.com/in/kurt-shields/</p>
						</div>
					</div>
				</a>
				<a href='https://discordapp.com/users/157993838143602689'>
					<div className='contact-container'>
					    <img src='https://i.imgur.com/GPD8tuN.png' alt='Discord Icon' />
					    <div className='contact-details'>
						    <h3>Discord:</h3>
						    <p>
								Doomtrain#3530
							
						    </p>
					    </div>
				    </div>
				</a>
			</div>
		);
}

export default Contact;