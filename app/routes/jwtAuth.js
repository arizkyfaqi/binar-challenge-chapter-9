const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db/db");
const Model = require("../models");
// const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
// const authorize = require("../middleware/authorize");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPRISES_IN,
  });
};

createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

//authorizeentication

router.post("/register", async (req, res) => {
  try {
    //cek jika ada
    const user = await Model.UserGame.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      return res.status(401).json("User already exist!");
    }

    const newUser = await Model.UserGame.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        status: "fail",
        message: "provide username and password",
      });
    }

    const user = await Model.UserGame.findOne({
      where: {
        username: req.body.username,
      },
    });

    const passwordMatch = await user.validPassword(password, user.password);

    if (!user || !passwordMatch) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect email or password!",
      });
    }

    //send token to client
    createSendToken(user, 200, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
