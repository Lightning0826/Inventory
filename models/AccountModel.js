const { bold } = require('colors');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    username:{
        type: String, 
        required: true,
   },
    contact:{
    type: String, 
    required: true,
},
    password:{
        type: String, 
        required: true,
   },
    verified: {
        type: Boolean
    }
   
},
{
    timestamps: true, 
});

const users = mongoose.model('Users', userSchema);

module.exports = users;
