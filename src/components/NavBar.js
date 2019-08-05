import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/raceinfo"> Race Info <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Results
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/smallCraftResults">small craft</Link>
                    <Link className="dropdown-item" to="/bigCraftResults">OC6</Link>
                    </div>
                </li>                
            </ul>
        </div>        
    </nav>
);

export default NavBar;