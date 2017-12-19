import React from 'react';
import Cookies from 'universal-cookie'
import {connect} from 'react-redux'
import  Utils from  '../utils'
const cookies = new Cookies();

 class Header extends  React.Component{




    logOut() {
        cookies.remove('user');
        Utils.updateuser(this.props.dispatch);
    }
    render() {


        console.log("2");
        var showbutton;
        if (!this.props.user) {
            showbutton = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            )
        } else {

            showbutton = (
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{this.props.user.user_name}</a></li>
                    <li><a href="/" onClick={this.logOut}>Log out</a></li>
                </ul>
            )
        }


        return (
            <div >
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">My Wallet</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li id="navbar-home"><a href="/">Home<span className="sr-only">(current)</span></a></li>
                                <li id="navbar-home"><a href="/alltranstions">All transactions of the system<span className="sr-only">(current)</span></a></li>

                            </ul>
                            {showbutton}

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Header = connect(function (state) {
    return {...state}
})(Header);

export default Header;