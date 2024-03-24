const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    customername: {
        type: String, 
        required: true,
    },
    customercontact: {
        type: Number, 
        required: true,
    },
    totalAmmount: {
        type: Number, 
        required: true,
    },
    paymentmethod: {
        type: String, 
        required: true,
    },
    location: {
        type: String, 
        required: true,
    },
    cartItems: {
        type: Array,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
},
  
{
    timestamps: true, 
});

const Bills = mongoose.model('bills', billSchema);

module.exports = Bills;
