import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark border-dark border-bottom border-3">
                <div className="container Nav-brand Font-nav mb-0">
                    <Link className="navbar-brand" to="/home">
                        Faraz<span className="Brand-2">.</span>Dev
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-1 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold Brand" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold Brand" to="/portfolio">
                                    Portfolio
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold Brand" to="/contact">
                                    Contact Me
                                </Link>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
