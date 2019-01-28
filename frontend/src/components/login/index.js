import React, { Component } from 'react';
import '../../container/App.css'
import userService from "../../services/userService";
import './index.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {error:false};
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

         if (result.error == true) {
             this.setState({error: true})
         }else{
             localStorage.setItem ('token', result.data.data.token);
             localStorage.setItem('name', result.data.data.name);
             window.location.href="/user/home";
         }
     };
    getErrors(){
        return (this.state.error) ? <h2>El usuario o la contraseña no son correctos. Intentalo de nuevo.</h2>:'';
    }

    render(){

        return(
            <div className="App-header">
                    <div className="header-title text-center">
                        <h1 className="">
                            Iniciar Sesión
                        </h1>
                        <h2>
                            Si ya tienes cuenta, entra aquí.
                        </h2>
                    </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="form  mt-5 d-flex justify-content-center">
                            <form className=" justify-content-center" method="post" name="login" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control my-input" id="email"
                                           placeholder="Email" ref={(input)=>this.getEmail = input}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" min="0" name="password" id="password"
                                           className="form-control my-input" placeholder="Password" ref={(input)=>this.getPass = input}/>
                                </div>
                                <div className="text-center ">
                                    <button type="submit" className=" btn btn-block send-button tx-tfm">Login
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
export default Login;