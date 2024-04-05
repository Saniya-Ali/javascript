const accountId = 144552

let accountName = 'Saniya'

var accountPassword = '123xyz'
/*
Var is deprecated because of issue in block scope and functional scope
*/

accountCity = 'Udaipur'

//accountId = 2  ----> Not allowed

console.table([accountId, accountName, accountPassword, accountCity])

let accountState
//It will be initialized with undefined