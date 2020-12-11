var db = require("../models");
var jwt = require("jsonwebtoken");
const config = require("../config");

// Setting up Variables
const JWT_SECRET = process.env.JWT_SECRET || config.JWT_SECRET;
const EXPIRE_TIME = process.env.EXPIRE_TIME || config.EXPIRE_TIME;

// Signup Method
exports.signup = function (req, res, next) {
  db.User.create(req.body)
    .then(function (user) {
      let token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: EXPIRE_TIME,
      });
      let message = "New User Created!!";
      res.status(200).json({
        "x-access-token": token,
        username: user.username,
        videoWatchedTime: user.videoWatchedTime,
      });
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
};

exports.signin = function (req, res, next) {
  console.log(req.body);
  db.User.findOne({ username: req.body.username })
    .then(function (user) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch) {
          var token = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: EXPIRE_TIME,
          });
          res.status(200).json({
            "x-access-token": token,
            username: user.username,
            videoWatchedTime: user.videoWatchedTime,
          });
        } else {
          res.status(403).json({
            message: "Wrong Password!!",
          });
        }
      });
    })
    .catch(function (err) {
      res.status(400).json({
        message: "Wrong Username!!",
      });
    });
};

module.exports = exports;
