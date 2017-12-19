import React from 'react';
import { Redirect,} from "react-router-dom";
import Config from '../config';
import Cookies from 'universal-cookie';
import $ from 'jquery';
import {connect} from 'react-redux'
const cookies = new Cookies();

 class LoginPage extends React.Component{

    login(){
        if (this.refs.username === "" || this.refs.password === "") {
            console.log("Error1");
            return;
        }


        let url  = Config.url_api + "/login";
        let data = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };


        $.post(url, data, function (res) {
            if (res.status === 1){
                cookies.set('user', res.data, { path: '/' });
                window.location.assign("/");


            }
            else {
                console.log("Login thanh cong");
            }
        })

    }
    render(){

        return(
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Login </h2>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="username" placeholder="Email Address" required="" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="password" placeholder="Password" required=""/>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={() => this.login()}>Login</button>
                </form>
            </div>
        );
    }
}

LoginPage = connect(function (state) {
    return {...state}
})(LoginPage);

export default LoginPage;