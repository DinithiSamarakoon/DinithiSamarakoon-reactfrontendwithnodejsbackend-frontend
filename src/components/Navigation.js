import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Login</Link>
                    <Link to='/tweets' className="nav-item nav-link">Signup</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;