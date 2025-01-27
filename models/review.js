//Schema for reviews
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment : String,
    rating : {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author : {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
//Review Model
module.exports = mongoose.model("Review", reviewSchema);