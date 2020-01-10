const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    type: {
        type: String,
        required:true
    }
});

const NewMembers = new mongoose.Schema({

    image: {
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    food: [foodSchema]
},{timestamps:true});

module.exports = mongoose.model('members',NewMembers);