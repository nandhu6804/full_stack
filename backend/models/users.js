var mdb = require('mongoose');
var userSchema = mdb.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

//data is transfered from backend code.so collection is created(i.e.)model
var user_schema = mdb.model("users", userSchema)

//model should be exported not the schema which we creates
module.exports = user_schema