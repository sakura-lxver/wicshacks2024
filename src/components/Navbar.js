import React from 'react';
import '../css/Navbar.css'
// import {Nav} from 'react-bootstrap';
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
            <a className="navbar-brand logo-text" href="/">PharmAssist</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link navbar-text" href="/">
                            About 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" href="drugsearch">
                            Drug Search
                         </a>
                    </li>
                    <li className="nav-item navbar-text">
                        <a className="link-extra" href="jeonghan" style={{color: 'white'}}>
                            Jeonghan
                         </a>
                    </li>
                    <li className="nav-item navbar-text">
                        <a className="link-extra" href="soobin" style={{color: 'white'}}>
                            Soobin
                         </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;