import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5  rounded">
                <div className="col-12 col-md-12 col-sm-12 col-lg-6">
                    <img src="images/img4.jpg" className="rounded d-block mx-lg-auto img-fluid" alt="" title='web Deb'  loading="lazy"/>
                </div>
                <div className="col-12 col-md-12 col-lg-6 p-3 Nav-font card rounded-2">
                    <h1 className="display-6 fw-semibold text-light lh-1 mb-3">Building dynamic, modern web solutions with <span className='Brand-2'>React.</span></h1>
                    <p className="lead h6 parag">Experienced web developer specializing in React and modern JavaScript frameworks. I create intuitive, responsive, and visually appealing web applications, delivering seamless user experiences.<span className='Brand-2'> With a strong foundation in front-end development and a passion for cutting-edge technologies,</span> I bring innovative ideas to life, turning complex concepts into functional, user-friendly websites.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to='/portfolio' type="button" className="btn btn-1 px-4 me-md-2">Portfolio</Link>
                        <Link to='/contact' type="button" className="btn btn-2 fw-bold border-1 px-4">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;