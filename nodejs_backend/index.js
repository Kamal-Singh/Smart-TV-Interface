const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  config = require("./config"),
  db = require("./models"),
  middleware = require("./middleware"),
  routes = require("./routes"),
  cors = require("cors");

// Setting up variables
const PORT = process.env.SERVER_PORT || config.SERVER_PORT;

// Setting up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});

// Routes
app.get("/", function (req, res) {
  res.send("Send a requst to /api/ for further instruction");
});
app.get("/api/", function (req, res) {
  res.send("Send a request to /api/auth/login to authenticate!!!");
});

app.use("/api/auth/", routes.authRoutes);
app.use("/api/playback/", middleware.authenticate, routes.playbackRoutes);
app.use("/api/tvSeries/", middleware.authenticate, routes.tvSeriesRoutes);
app.use("/api/movies/", middleware.authenticate, routes.moviesRoutes);
app.use("/api/channels/", middleware.authenticate, routes.channelsRoutes);

// Server Listener
app.listen(PORT, (req, res) => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
