var mdb = require('mongoose');
var adminSchema = mdb.Schema({
    firstNme: String,
    lastName: String,
    email: String,
    password: String
})

//data is transfered from backend code.so collection is created(i.e.)model
var admin_schema = mdb.model("admins", adminSchema)

//model should be exported not the schema which we creates
module.exports = admin_schema