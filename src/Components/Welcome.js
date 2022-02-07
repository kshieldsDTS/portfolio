import React from 'react';

function Welcome(props) {
    return (
			<div>
				<div className='loader-wrapper'>
					<div className='loader_one loader'></div>
					<div className='loader_two loader'></div>
					<div className='loader_three loader'></div>
					<div className='loader_four loader'></div>
					<div className='loader_five loader'></div>
					<div className='loader_six loader'></div>
				</div>
				<div class='hexagon'>
					<span></span>
				</div>
			</div>
		);
}

export default Welcome;