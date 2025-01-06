var mdb = require('mongoose');
var userSchema = mdb.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
})

//data is transfered from backend code.so collection is created(i.e.)model
var user_schema = mdb.model("User", userSchema)

//model should be exported not the schema which we creates
module.exports = user_schema