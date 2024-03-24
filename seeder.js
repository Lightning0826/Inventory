const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const connectDB = require ('./config/config');
const itemmodel = require ('./models/itemmodel');
const items =require ('./utils/data');

dotenv.config();
connectDB();

//function seeder

const importData = async () => {
    try {
        await itemmodel.deleteMany();
        const itemData = await itemmodel.insertMany(items)
        console.log('All Items Added'.bgGreen);
        process.exit();
    } catch (error) {
        console.log (`${error}`.bgWhite.inverse);
        process.exit (1);
    }
};

importData();