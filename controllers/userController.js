
const userModel = require('../models/AccountModel');

//Login
 const loginController = async(req,res) => {
    try {
        const {username, password} = req.body
        const user = await userModel.findOne({username, password, verified: true});
        if(user){
            res.status(200).send(user);
        }else{
            res.json({
                message: "Login Fail",user,
            })
        }
    }catch (error){
        console.log(error)
    }
};
//Register
const registerController = async (req, res) => {
    try {
      const newUser = new userModel({ ...req.body, verified: true });
      await newUser.save();
      res.status(201).send("Registered Successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send("Error: Registration failed: " + error.message);
    }
  };
  
   
module.exports = {
loginController,
registerController
}