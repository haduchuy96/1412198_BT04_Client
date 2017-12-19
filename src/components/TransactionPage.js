import React from "react";
import {Redirect, NavLink} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import Config from '../config';
import Cookies from 'universal-cookie';
import $ from 'jquery'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {connect} from 'react-redux'
const cookies = new Cookies();



class TransactionPage extends React.Component{

    constructor(props) {
        super(props);

    }







    render() {

        return (
            <div className="container-fluid text-center">
                <h1>My Wallet</h1>
                <div className="row content">
                    <div className="col-sm-2 sidenav">

                    </div>
                    <div className="col-sm-8 text-left">

                        <hr/>
                        <h3 className=" text-center">All transactions of the system</h3>
                        <div>
                            <BootstrapTable
                                data={ this.props.listtransaction}
                                pagination>
                                <TableHeaderColumn dataField='from' isKey>From</TableHeaderColumn>
                                <TableHeaderColumn dataField='to'>To</TableHeaderColumn>
                                <TableHeaderColumn dataField='created_at'>Date</TableHeaderColumn>
                                <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                            </BootstrapTable>
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

TransactionPage = connect(function (state) {
    return {...state}
})(TransactionPage);
export default TransactionPage;