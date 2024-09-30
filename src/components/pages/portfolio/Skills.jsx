import React from 'react'
import skills from '../../Data/skills'
const Skills = () => {
    return (
        <div className='container w-75'>
            <div>
                <div className="row py-4">
                    <div className="col-lg-6 col-md-8 mx-auto Nav-brand d-flex flex-column card rounded-4 py-2 align-items-center">
                        <h1 className="fw-bold text-light">Skills</h1>
                        <p className="text-light fw-light opacity-50">Technologies i prefer using</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="row justify-content-center gap-3 column-gap-1 mb-4">
                    {
                        skills.map((skill) => {
                            return (
                                <div className="col-6 p-3 col-lg-3 col-md-3 col-sm-4 text-light card d-flex align-items-center mx-1" key={skill.id}>
                                    <div className="col-12 col-md-12 col-sm-8 col-lg-6 skill d-flex flex-column align-items-center">
                                        <img src={skill.img} className="rounded d-block mx-auto img-fluid" alt={skill.title} width="50" height="44" loading="lazy" />
                                        <h6 className="Nav-brand mt-2 fw-semibold text-center">{skill.title}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Skills