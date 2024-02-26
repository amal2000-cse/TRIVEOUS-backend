const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register api
router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });
    // console.log(newUser);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login API
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    //if the user is not found
    !user && res.status(400).json("Wrong credentials")

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Password");
    
    //because we dont want to send the password
    const{password , ...others}=user; 
    res.status(200).json(others._doc);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
