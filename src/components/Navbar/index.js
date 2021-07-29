import React from 'react'

// css
import '../../assets/css/navbar.css'

// image
import logo from '../../assets/img/logo.jpg'

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="logo" />
                <div className="search">
                    <input placeholder="Search..." />
                    <i className="fa fa-search icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
