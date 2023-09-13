const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide your name'],
        minlength:3,
        maxlength:50,
    }
})

module.exports= mongoose.model('User',UserSchema)