var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    console.log(user,password)
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        console.log(rows)
        return rows [0];
        // console.log("usarios routes = "+user + password)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }

 