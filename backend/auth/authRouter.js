const express = require("express");
const router = express.Router();
const User = require("../models/user.model")
const {newToken} = require("./authMid");
const bcrypt = require("bcrypt")


//login


router.route('/login').post((req, res) => {
    let { username, password } = req.body;
  
    User.findOne({ username })
      .first()
      .then(user => {
        console.log(User.Password);
        if (user && bcrypt.compareSync(password, user.Password)) {
          const token = newToken(User);
          res.status(200).json({
            message: `Welcome Back ${user.UserName}.`,
            token
          });
        } else {
          res.status(400).json({ message: "Wrong username or password" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: "failed to login" });
      });
  });
  

  module.exports = router;