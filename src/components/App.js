import React  from 'react'
import Router from '../router'
import Header from '../components/Header'
import '../index.css';
import { BrowserRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import  Utils from  '../utils'
import Action from '../action'
import {connect} from 'react-redux'
const cookies = new Cookies();

 class App extends  React.Component{




    constructor(props) {
        super(props);

        Utils.updateuser(this.props.dispatch);
        Utils.updatelistalltransaction(this.props.dispatch);
        if(cookies.get('user')) {
            Utils.updattotalmoney(this.props.dispatch);
            Utils.updatelistalltransactionuser(this.props.dispatch);

            Utils.updatelistwalletid(this.props.dispatch);
        }



    }







    render() {

        console.log("1");



        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js"></script>
                    <BrowserRouter>
                    <div >
                        <Header  />
                        <div className="app">
                            <div className="container">
                                <div className="app-background">
                                    <Router  />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}



App = connect(function (state) {
    return {...state}
})(App);

export default App;
