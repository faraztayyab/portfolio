import React from 'react'
import projects from '../../Data/projects'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <div className="container w-75">
      <div>
        <div className="row py-4">
        <div className="col-lg-6 col-md-8 mx-auto Nav-brand d-flex flex-column card rounded-4 py-2 align-items-center">
          <h1 className="fw-bold text-light">PROJECTS</h1>
        </div>
      </div>
        <div className=''>

          <div className="row justify-content-center gap-3 column-gap-1 mb-4">
            {
              projects.map((project) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-4 p-3 text-light card d-flex align-items-center mx-1" key={project.id}>
                    <div className="col-12 col-md-12 col-sm-8 col-lg-6 skill d-flex flex-column align-items-center">
                      <img src={project.Image} className="rounded d-block mx-auto img-fluid" alt={project.name} width="50" height="44" loading="lazy" />
                      <Link to={project.source} className='nav-link'><h6 className="Nav-brand mt-2 fw-semibold text-center">{project.name}</h6></Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      
    </div>)
}

export default Projects