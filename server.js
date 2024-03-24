const express =require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors =require('cors')
const dotenv = require('dotenv')
const { bgCyan } = require('colors')
require('colors')
const connectDB = require('./config/config')
const path = require('path');
//dotenvconfig
dotenv.config()

//db config
connectDB();

//rest object
const app =express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//public directory
console.log('Public directory:', path.join(__dirname, 'public'));

//routes
app.use("/api/items", require ("./routes/itemRoutes"));
app.use("/api/users", require ("./routes/userRoute"));
app.use("/api/bills", require("./routes/billsRoutes"));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}` .bgBlue);
});
