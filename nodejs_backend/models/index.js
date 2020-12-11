const mongoose = require("mongoose");
const config = require("../config");

// Setting up Mongoose
mongoose.set("debug", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);

mongoose.Promise = global.Promise;

// Seting up variables for use
const DATABASE_URL = process.env.DATABASE_URL || config.DATABASE_URL;

// Connecting to Database
mongoose.connect(DATABASE_URL);

// Exporting methods and database schema
module.exports.User = require("./user");
