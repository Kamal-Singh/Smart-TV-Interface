const express = require("express"),
  router = express.Router(),
  authRoutes = require("./auth"),
  playbackRoutes = require("./playback"),
  tvSeriesRoutes = require("./tvSeries"),
  moviesRoutes = require("./movies"),
  channelsRoutes = require("./channels");

module.exports.authRoutes = authRoutes;
module.exports.playbackRoutes = playbackRoutes;
module.exports.tvSeriesRoutes = tvSeriesRoutes;
module.exports.moviesRoutes = moviesRoutes;
module.exports.channelsRoutes = channelsRoutes;
