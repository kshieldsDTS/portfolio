import React from 'react';
import { useEffect, useState } from 'react'

const axios = require('axios')

function Projects(props) {
    const [fetchedProjects, setFetchedProjects] = useState()
    useEffect(() => {
        const url = 'https://ancient-tor-26332.herokuapp.com/api/projects/';
        (async () => {
            try {
                const fetchedData = await axios.get(url)
                const sortedData = fetchedData.data.sort((a, b) => a.id - b.id)
                setFetchedProjects(sortedData.reverse())
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
    return (
			<div className='projects-wrapper'>
				<p>{project.name}</p>
				<img
					className='project-preview'
					src={project.preview_image}
					alt='Kurt and Tofu'></img>
				<p>{project.tools}</p>
				<p>{project.description}</p>
				<a href={project.github_url} target='_blank' rel='noopener noreferrer'>
					GitHub Repository
				</a>
				<div className='gold-two'></div>
				<a
					href={project.deployed_url}
					target='_blank'
					rel='noopener noreferrer'>
					Deployed Application
				</a>
				<div className='gold-two'></div>
				<p>Towers of Hanoi</p>
				<img
					className='project-preview'
					src='https://github.com/kshieldsDTS/towers-of-hanoi/blob/main/assets/towers-of-hanoi.png'
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