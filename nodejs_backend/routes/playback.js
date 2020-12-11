const express = require("express"),
  router = express.Router(),
  db = require("../models");

router.post("/", (req, res) => {
  let videoWatchedTime = req.body.videoWatchedTime || 0;
  db.User.findByIdAndUpdate(
    { _id: req.userId },
    { videoWatchedTime: videoWatchedTime },
    { returnOriginal: false, new: true }
  )
    .then((user) => {
      let obj = {};
      obj.message = "Time Updated Successfully";
      obj.videoWatchedTime = videoWatchedTime;
      res.status(200).json(obj);
    })
    .catch((err) => {
      let obj = {};
      obj.message = "Unable to update playback time";
      res.status(500).json(obj);
    });
});

router.get("/", (req, res) => {
  db.User.findOne({ _id: req.userId })
    .then((user) => {
      let obj = {};
      obj.videoWatchedTime = user.videoWatchedTime;
      res.status(200).json(obj);
    })
    .catch((err) => {
      let obj = {};
      obj.videoWatchedTime = 0;
      obj.message = "Unable to find playback time";
      res.status(200).json(obj);
    });
});
module.exports = router;
