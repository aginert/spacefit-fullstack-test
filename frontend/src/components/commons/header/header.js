import React, { Component } from 'react';
import './header.css';


class Header extends Component{
    render(){
        return(
            <div className="Header-poster">
            <nav className="navbar navbar-expand-lg navbarColor navbar-light ">
                    <img className="logo" src={"/images/general/logoA.png"} alt="Spacefilm"/>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#userHome"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#userHome"> Movies <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}
export default Header;
