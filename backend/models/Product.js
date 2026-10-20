const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        maxlength: 500
    },
    category:{
        type:String,
        required: true,
        enum: ["electronics", "food", "clothing", "furniture", "other"]
    },
    price:{
        type: Number,
        required: true,
        min: 0.1
    },
    quantity:{
        type: Number,
        required: true,
        min: 0
    }

},{timestamps: true})


const Product = mongoose.model('Product',ProductSchema)


module.exports = Product