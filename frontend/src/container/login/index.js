import React, { Component } from 'react'
import '../App.css'
import {connect} from 'react-redux';
import userService from "../../services/userService";
import {loginUser} from '../../redux/actions/userActions';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {error:false};
        console.log('cosita', props.is_login);
    }
     handleSubmit=async (e)=>{
         e.preventDefault();
         let email = this.getEmail.value;
         let password = this.getPass.value;
         const Data={
             email,
             password
         }
         const UserService = new userService();
         let result = await UserService.loginUser(Data);


         if (!result) {
             this.setState({error:true})
         }else{
             this.props.dispatch(loginUser(result));
         }
     };
    getErrors(){
        return (this.state.error) ? <h2>El usuario o la contraseña no son correctos. Intentalo de nuevo.</h2>:'';
    }
    render(){

        return(
            <div className="App-login">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-md-10">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"
                               ref={(input)=>this.getEmail = input}/>
                        {this.getErrors()}
                    </div>
                    <div className="form-group col-md-10">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="password"
                               placeholder="Password"
                               ref={(input)=>this.getPass = input}/>
                    </div>
                    <div className="col-md-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
};
export default connect() (Login);