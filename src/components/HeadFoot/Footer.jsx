import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="py-3 Nav-font fw-bold Font-nav sticky-bottom my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item"><Link to="/portfolio" className="nav-link fw-semibold Brand">Portfolio</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link fw-semibold Brand">Contact Me</Link></li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Footer