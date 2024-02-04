import React from 'react';
// import {Nav} from 'react-bootstrap';
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">PharmAssist</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            About 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="drugsearch">
                            Drug Search
                         </a>
                    </li>
                    <li className="nav-item">
                        <a className="link-extra" href="jeonghan" style={{color: 'white'}}>
                            Jeonghan
                         </a>
                    </li>
                </ul>
            </div>
        </nav>
        // <Navbar bg="dark" expand="lg">
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="/" id="nav-link">
        //                 LINK 1
        //             </Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}


export default Navbar;