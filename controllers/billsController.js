const billsModel = require('../models/billsModel');


const addBillsController = async (req, res) => {
    try {
        const newBill = new billsModel(req.body);
        await newBill.save();
        res.send("Bill Generate Successfully!");
    } catch (error) {
        console.log(error);
        res.send("Error: " + error.message);
    }
};
const getBillsController = async (req, res) => {
    try {
        const bills = await billsModel.find();
        res.send(bills);
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
};

module.exports = {
   addBillsController,
   getBillsController 
};
