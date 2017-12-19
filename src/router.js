import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import Register from './components/RegisterPage'
import Transaction from './components/TransactionPage'

import {connect} from 'react-redux'

class Router extends Component {
    render() {
        const user = this.props.user;
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={(props) => <Home  />}/>
                    <Route path='/login' render={(props) => <Login  />}/>
                    <Route exact path='/register' render={(props) => <Register {...props} />}/>
                    <Route exact path='/alltranstions' render={(props) => <Transaction {...props} />}/>
                </Switch>
            </main>
        )
    }
}


Router = connect(function (state) {
    return {...state}
})(Router);
export default Router
