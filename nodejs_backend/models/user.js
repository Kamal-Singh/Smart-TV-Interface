const mongoose = require("mongoose"),
  bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  videoWatchedTime: {
    type: Number,
    default: 0,
  },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10).then(
    function (hashedPassword) {
      user.password = hashedPassword;
      next();
    },
    function (err) {
      return next(err);
    }
  );
});

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return next(err);
    return next(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
