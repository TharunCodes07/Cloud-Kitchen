const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email_id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:false
    }
})

const user = mongoose.model('Users',userSchema);

module.exports = user;