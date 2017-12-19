import  Utils from  './utils'
import Config from './config';
import $ from 'jquery'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let default_state = {
    user:null,
    totalMoney: null,
    listtransactionuser: [],
    listtransaction: [],
    listwalletid :[]
};



export default (state = default_state, action) => {
    switch (action.type) {

        case 'UPDATE_USER':
            let user = action.action.user;
            return {...state, user:user};


        case 'UPDATE_TOTALMONEY':
            let tm= action.action.totalmoney;
            return {...state, totalMoney:tm};

        case 'UPDATE_LISTTRANSACTONUSER':
            let tmplisttransactionuser = action.action.listtransactionuser;
            return {...state, listtransactionuser: tmplisttransactionuser};

        case 'UPDATE_LISTTRANSACTON':
            let tmplisttransaction = action.action.listtransaction;
            return {...state, listtransaction: tmplisttransaction};

        case 'UPDATE_LISTWALLETID':
            let tmplistwalletid = action.action.listwalletid;
            return {...state, listwalletid: tmplistwalletid};

        default:
            return state
    }
}