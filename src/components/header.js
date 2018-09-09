import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a href="https://www.salesloft.com" className="navbar-brand"><img src="../salesloft_logo.png" className="d-inline-block align-top mr-2" width="100" alt="logo" /></a>

                        <div>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/personList" className="nav-link">Person List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/count" className="nav-link">Unique Char Count</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/duplicate" className="nav-link">Duplicates</Link>
                            </li>
                        </ul>
                        </div>

                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;