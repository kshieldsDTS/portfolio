import React from 'react';

function Test(props) {
    return (
			<section className='loader-container'>
				<div className='loader-div'>
					<div className='loader-div-inner'>
						<span className='one h6 loader-span' />
						<span className='two h3 loader-span' />
					</div>
				</div>
				<div className='loader-div'>
					<div className='loader-div-inner'>
						<span className='one h1 loader-span'></span>
						<span className='two h4 loader-span'></span>
					</div>
				</div>
				<div className='loader-div'>
					<div className='loader-div-inner'>
						<span className='one h5 loader-span' />
						<span className='one h2 loader-span' />
					</div>
				</div>
                <div className="k">KS</div>
			</section>
		);
}

export default Test;