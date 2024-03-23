const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Model name"],
        trim: true,
    },
    organization:{
        type:String,
        required:[true,"Please enter organization name"],
        trim:true,
    },
    category: {
        type: String,
        required: [true, "Please enter Model description"],
    },
    downloads: {
        type: String,
        required: [true, "Please enter Model price"],
        // maxLength: [8, "Price cannot exceed 8 characters"],
    },
    reviews: {
        type: String,
        default: "0",
    },
    ratings:{
        type:Number,
    },
    images_url:{
        type: String,
    },
    description:{
        type : String,
    },
    code:{
        type : String,
    },
    use:{
        type : String,
    },
    tryModel:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);