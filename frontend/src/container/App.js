import React, { Component } from 'react';
import './App.css';
import Login from '../components/login';
import Register from '../components/register';


class App extends Component {
  render() {
    return (
        <div className="containerUserHome imgPortada">
            <div className="row alingUser">
                <div className="col-md-6">
                    <Register/>
                </div>
                <div className="col-md-6">
                    <Login/>
                </div>
            </div>
        </div>

    )};
}

export default App;
