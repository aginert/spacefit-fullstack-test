//Librerías
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Css
import './index.css';

//Containers
import App from './container/App';
import './components/login';
import Error_404 from './components/commons/error404';
import Login from './components/login';
import Register from './components/register';
import UserHome from './container/userHome';

//Redux
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './redux/reducers/userReducer';



//Componentes
import Header from './components/commons/header/header';
import Footer from './components/commons/footer/footer';

import * as serviceWorker from './serviceWorker';

const Store = createStore(userReducer);

console.log(Store.getState());


const Routes=(

    <BrowserRouter>
        <Provider store={Store}>
            <Header/>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/login" component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/user/home" component={UserHome}/>
                <Route parth='*' component={Error_404}/>
            </Switch>
            <Footer/>
        </Provider>
    </BrowserRouter>
)
ReactDOM.render(Routes,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
