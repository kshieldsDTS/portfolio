import React from 'react';
import { useEffect, useState } from 'react'
import tofu from '../Assets/kurt and tofu.jpeg'

const axios = require('axios')

function Projects(props) {
    const [fetchedProjects, setFetchedProjects] = useState()
    function testConsole(){
        // console.log(imageURL);
    }
    useEffect(() => {
        const url = 'https://arcane-hills614.herokuapp.com/api/projects/';
        (async () => {
            try {
                const fetchedData = await axios.get(url)
                setFetchedProjects(fetchedData.data.reverse())
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
    return (
			<div className='projects-wrapper'>
				{fetchedProjects ? (
					fetchedProjects.map((project, i) => (
						<div key={`${project.id}${i}`}
                            className='project-div'>
							<p>{project.name}</p>
							<img className='project-preview' src={project.preview_image} alt='Kurt and Tofu'></img>
							<p>{project.tools}</p>
                            <p>{project.description}</p>
                            <a href={project.github_url}>GitHub Repository</a>
                            <a href={project.deployed_url}>Deployed Application</a>
						</div>
					))
				) : (
					<h1>Please stand by... loading...</h1>
				)}
				<button onClick={testConsole}>Test Shit</button>
			</div>
		);
}

export default Projects;