import React from "react";
import {Redirect, NavLink} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import Config from '../config';
import Cookies from 'universal-cookie';
import $ from 'jquery'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import  Utils from '../utils'
import {connect} from 'react-redux'
import Action from '../action'

const cookies = new Cookies();



 class HomePage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

    }




    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }









    getsellectid(e){
        document.getElementById("dest_wallet").value = e.target.value;

    }




    submit(){


        if (this.refs.dest_wallet.value === "" || this.refs.amount.value === "" ||this.refs.amount.value ===  "0") {
            alert("Invalid amonut Or Invalid Wallet Id ");
            return;
        }

        if(parseFloat(this.refs.amount.value)<0){
            alert("Negative numbers are not allowed");
            return;
        }



        let url  = Config.url_api + "/translation";
        let data = {
            amount: this.refs.amount.value,
            dest_wallet: this.refs.dest_wallet.value,
            source_wallet: this.props.user.user_id,
        };

        $.post(url, data, function (res) {
            if (res.status === 1){

               // Utils.updattotalmoney(this.props.dispatch);
               // Utils.updatelistalltransactionuser(this.props.dispatch);
                //Utils.updatelistalltransaction(this.props.dispatch);
               // Utils.updatelistwalletid(this.props.dispatch);
                window.location.assign("/");
            }
            else {
                    alert(res.message);
            }
        })

    }




    render() {


        if (!this.props.user)
            window.location.assign("/login");


        var walletOptions = null;
        var listwalletid =  []
        listwalletid = this.props.listwalletid
        console.log(listwalletid)
        walletOptions = listwalletid.map((item, idx) => {
            return <option key={`walletOption_${idx}`} value={item.id}>{item.name}</option>
        })
        return (
            <div className="container-fluid text-center">
                <h1>My Wallet</h1>
                <div className="row content">
                    <div className="col-sm-2 sidenav">

                    </div>
                    <div className="col-sm-8 ">
                        <div className="col-sm-6 text-left">
                            <h3>Total Money: {this.props.totalMoney}</h3>
                        </div>
                        <div className="col-sm-6 text-right">
                            <button className=" btn-success btn" onClick={() => this.open()}>
                                Send Money
                            </button>
                        </div>
                        <hr/>
                        <h3 className="col-sm-12 text-center">History</h3>
                        <div>
                            <BootstrapTable
                                data={ this.props.listtransactionuser }
                                pagination>
                                <TableHeaderColumn dataField='status' isKey>Status</TableHeaderColumn>
                                <TableHeaderColumn dataField='walletid'>Wallet ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='created_at'>Date</TableHeaderColumn>
                                <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
                            </BootstrapTable>
                        </div>


                        <Modal show={this.state.showModal} onHide={() => this.close}>
                            <Modal.Header >
                                <Modal.Title>Create Translation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    <form className="form-horizontal">


                                        <div className="form-group">
                                            <label className="control-label col-sm-2" >Amount</label>
                                            <div className="col-sm-3">
                                                <input type="number" className="form-control" ref="amount" id="amount" placeholder="Amount"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2" >Destination wallet ID</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" ref="dest_wallet" id="dest_wallet" placeholder="Destination wallet ID"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <p className="control-label col-sm-2">Or</p>
                                        </div>
                                        <div className="form-group">
                                            <label  className="control-label col-sm-2" >Destination list wallet ID:</label>
                                            <div className="col-sm-3">
                                                <select className="form-control"  onChange={this.getsellectid.bind(this)}>
                                                    <option value=""></option>
                                                    {walletOptions}
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-default" onClick={() => this.submit()}>Submit</button>
                                <Button onClick={() => this.close()}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </div>

                </div>
            </div>
        );
    }
}

HomePage = connect(function (state) {
    return {...state}
})(HomePage);

export default HomePage;