import Cookies from 'universal-cookie';
import Config from './config';
import $ from 'jquery'
import Action from './action';

const cookies = new Cookies();




const  updateuser = function (dispatch) {
    let user = cookies.get('user');
    if(user){
        dispatch(Action.UpdateUser(user));
        return
    }
    else{
        dispatch(Action.UpdateUser(null));
        return
    }
}

const  updattotalmoney= function (dispatch) {
    let user_id = cookies.get('user').user_id;
    if(user_id){
        let url  = Config.url_api + "/wallet/"+user_id;
        $.get(url, function (res) {
            if (res.status == 1) {

                dispatch(Action.UpdateTotalMoney(res.data[0].money));
            }
        })
    }


}





const  updatelistalltransactionuser = function (dispatch) {

    let user_id = cookies.get('user').user_id;
    if(user_id) {
        let url = Config.url_api + "/listtranslation/" + user_id;
        $.get(url, function (res) {
            if (res.status == 1) {
                var listTransaction = []
                res.data.forEach(function (tmp) {

                    if (tmp.source_user == user_id) {
                        listTransaction.push({
                            status: "SENT",
                            walletid: tmp.dest_user,
                            amount: "-" + tmp.amount.toString(),
                            created_at: tmp.created_at.slice(0, 10)
                        });
                    } else {
                        listTransaction.push({
                            status: "RECEIVE",
                            walletid: tmp.source_user,
                            amount: "+" + tmp.amount.toString(),
                            created_at: tmp.created_at.slice(0, 10)
                        });
                    }
                })

                dispatch(Action.UpdateListTransActionUser(listTransaction));

            }
        })
    }

}




const  updatelistalltransaction = function (dispatch) {


    let url  = Config.url_api + "/listtranslation/";
    $.get(url, function (res) {
        var listtransactions = []
        if (res.status == 1) {
            res.data.forEach(function (tmp) {
                listtransactions.push({
                    from: tmp.source_user,
                    to: tmp.dest_user,
                    created_at: tmp.created_at.slice(0, 10),
                    amount: tmp.amount
                })
            })

            dispatch(Action.UpdateListTransAction(listtransactions));
        }

    })


}




const  updatelistwalletid = function (dispatch) {
    let user_id = cookies.get('user').user_id;
    let url  = Config.url_api + "/alluser/"
    $.get(url, function (res) {
        if (res.status == 1) {
            var tmplistwallet = [];
            res.data.forEach(function(tmp) {

                if (tmp._id == user_id){

                }else{
                    tmplistwallet.push({name: tmp.username, id: tmp._id});
                }
            });

            dispatch(Action.UpdateListWalletId(tmplistwallet));
        }
    })

}



export default {
    updattotalmoney,
    updateuser,
    updatelistwalletid,
    updatelistalltransactionuser,
    updatelistalltransaction
}