const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose); //it adds username, password with salting and hashing in the schema automatically.


module.exports = mongoose.model("User", userSchema);
