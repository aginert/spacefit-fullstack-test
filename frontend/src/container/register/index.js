import React, {Component} from 'react';
import '../register/index.css';
import {connect} from 'react-redux';
import userService from "../../services/userService";
import {registerUser} from "../../redux/actions/userActions";

class Register extends Component{

    handleSubmit= async (e)=>{
        e.preventDefault();
        let name = this.getName.value;
        let email = this.getEmail.value;
        let password = this.getPass.value;
        const Data={
            name,
            email,
            password
        }
        const UserService = new userService();
        let result = await UserService.registerUser(Data);
        this.props.dispatch(registerUser(result));
    };
render (){
      return(
          <div className=" container App-header">
              <div className="col-md-10 mx-auto text-center">
                  <div className="header-title">
                      <h1 className="wv-heading--title">
                          SPACEFILM
                      </h1>
                      <h2 className="wv-heading--subtitle">
                          Para poder crear las mejores listas de peliculas, registrate aquí.
                      </h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-10 mx-auto">
                      <div className="myform form ">
                          <form action="" method="post" name="login" onSubmit={this.handleSubmit.bind(this)}>
                              <div className="form-group">
                                  <input type="text" name="name" className="form-control my-input" id="name"
                                         placeholder="Name" ref={(input)=>this.getName = input}/>
                              </div>
                              <div className="form-group">
                                  <input type="email" name="email" className="form-control my-input" id="email"
                                         placeholder="Email" ref={(input)=>this.getEmail = input}/>
                              </div>
                              <div className="form-group">
                                  <input type="password" min="0" name="password" id="password"
                                         className="form-control my-input" placeholder="Password" ref={(input)=>this.getPass = input}/>
                              </div>
                              <div className="text-center ">
                                  <button type="submit" className=" btn btn-block send-button tx-tfm">Create Your Free
                                      Account
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      )
}
};
export default connect() (Register);
