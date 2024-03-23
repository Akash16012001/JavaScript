const accountId = 12345
let accountEmail = "akash@gmail.com"
var accountPassword = '14325'
accountCity = 'Berhampur';
let accountState;

// accountId = 2    // not allowed

accountEmail = 'akash@akash.com'
accountPassword = '16012001'
accountCity = 'Bengaluru'

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])