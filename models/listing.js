//Schema for Listings
const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    image : {
        filename: String,
        url: String        
    }, 
    price : Number,
    location : String,
    country : String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref : "User"
    }
});

//propagate to reviews with Post mongoose middleware method.
listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

//Listing model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// "https://img.freepik.com/premium-photo/funny-black-baby-winking-sticking-out-tongue-isolated-white-background_407474-32782.jpg"