
const UpdateUser = (user) => ({
    type: 'UPDATE_USER',
    action: {user},
});

const UpdateTotalMoney = (totalmoney) => ({
    type: 'UPDATE_TOTALMONEY',
    action: {totalmoney},
});

const UpdateListTransActionUser = (listtransactionuser) => ({
    type: 'UPDATE_LISTTRANSACTONUSER',
    action: {listtransactionuser},
});

const UpdateListTransAction = (listtransaction) => ({
    type: 'UPDATE_LISTTRANSACTON',
    action: {listtransaction},
});

const UpdateListWalletId = (listwalletid) => ({
    type: 'UPDATE_LISTWALLETID',
    action: {listwalletid},
});





export default {UpdateUser,UpdateTotalMoney,UpdateListTransActionUser,UpdateListTransAction,UpdateListWalletId}