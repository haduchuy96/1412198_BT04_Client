import React from 'react';
import {Redirect} from 'react-router-dom'
import Config from '../config';
import Cookies from 'universal-cookie';
import $ from 'jquery';
import {connect} from 'react-redux'
var request = require('axios');
const cookies = new Cookies();


class RegisterPage extends React.Component{

    constructor(props) {
        super(props);
       

    }


    register() {
        if (this.refs.username.value === "" || this.refs.password1.value === "" || this.refs.password2.value === "")
        {
            alert("Không được có giá trị rỗng");
            return;
        }

        if(this.refs.password1.value != this.refs.password2.value)
        {
            alert("Password khác nhau");
            return;
        }

        let url  = Config.url_api + "/register";
        let data = {
            username: this.refs.username.value,
            password: this.refs.password1.value
        };



        $.post(url, data, function (res) {

            if (res.status === 1){
                cookies.set('user', res.data, { path: '/' });
                window.location.assign("/");
            }
            else {

            }

        })

    }


    render(){

        return(
              <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Create your Wallet</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="username" placeholder="Username" required="" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="password1"  placeholder="New Password" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" ref="password2"  placeholder="Confirm Password" required=""/>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={() => this.register()}>Register</button>


                </form>
              </div>

        );
    }
}

RegisterPage = connect(function (state) {
    return {...state}
})(RegisterPage)

export default RegisterPage;