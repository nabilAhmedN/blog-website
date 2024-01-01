const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("User not found!");
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(401).json("Worng Credentials");
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "3d",
      }
    );
    const { password, ...info } = user._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
      })
      .status(200)
      .json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send("User logged out");
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/refetch", (req,res)=>{
//   const token=req.cookies.token
//   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,{},async (err,data)=>{
//       if(err){
//           return res.status(404).json(err)
//       }
//       res.status(200).json(data)
//   })
// })

router.get("/refetch", (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }

    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    res.status(200).json(decodedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
