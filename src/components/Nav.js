import React from 'react';
import { Link } from 'react-router-dom'

 const Nav=()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Navbar</div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Cart' className="nav-link">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
