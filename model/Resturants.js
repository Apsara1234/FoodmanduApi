const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    item: {
        type: String,
        required:true
    }
});
const locationSchema = new mongoose.Schema({
    location: {
        type: String,
        required:true
    }
});
const ResturantsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:false
    },
    location:[locationSchema],
    food: [foodSchema]
},{timestamps:true});

module.exports = mongoose.model('Resturants',ResturantsSchema);