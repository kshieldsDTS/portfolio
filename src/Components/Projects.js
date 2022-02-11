import React from 'react';
import { useEffect, useState } from 'react'

const axios = require('axios')

function Projects(props) {
    const [fetchedProjects, setFetchedProjects] = useState()
    useEffect(() => {
        const url = 'https://arcane-hills614.herokuapp.com/api/projects/';
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
				{fetchedProjects ? (
					fetchedProjects.map((project, i) => (
						<div key={`${project.id}${i}`} className='project-div'>
							<p>{project.name}</p>
							<img
								className='project-preview'
								src={project.preview_image}
								alt='Kurt and Tofu'></img>
							<p>{project.tools}</p>
							<p>{project.description}</p>
							<a
								href={project.github_url}
								target='_blank'
								rel='noopener noreferrer'>
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
						</div>
					))
				) : (
					<h1>Heroku is waking up... please stand by!</h1>
				)}
			</div>
		);
}

export default Projects;