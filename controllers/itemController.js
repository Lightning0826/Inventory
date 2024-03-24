const itemmodel = require('../models/itemmodel');

// Get Item
const getItemController = async (req, res) => {
    try {
        const item = await itemmodel.find();
        res.status(200).send(item);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

// Add Item
const addItemController = async (req, res) => {
    try {
        const newItem = new itemmodel(req.body);
        await newItem.save();
        res.status(201).send("Item Created Successfully!");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error: " + error.message);
    }
};

// Edit Item
const editItemController = async (req, res) => {
    try {
        await itemmodel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
        res.status(200).send("Product Updated!");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error: " + error.message);
    }
};

// Delete Item
const deleteItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        await itemmodel.findOneAndDelete({ _id: itemId });
        res.status(200).send("Product Deleted!");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error: " + error.message);
    }
};

module.exports = {
    getItemController,
    addItemController,
    editItemController,
    deleteItemController
};
