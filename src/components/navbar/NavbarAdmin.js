import React from 'react'
import { Link } from 'react-router-dom'

import LogoDumbmerch from '../../assets/images/LogoDumbmerch.png'

const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link
                        to="/complain-admin"
                        className="navbar-brand"
                    >
                        <img src={LogoDumbmerch} alt="logo-navbar" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/complain-admin" className="nav-link ms-3 fs-5 fw-bolder text-white" aria-current="page">Complain</Link>
                            <Link to="/category" className="nav-link ms-3 fs-5 fw-bolder text-white">Category</Link>
                            <Link to="/product" className="nav-link ms-3 fs-5 fw-bolder text-white">Product</Link>
                            <Link to="/" className="nav-link ms-3 fs-5 fw-bolder text-white">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin