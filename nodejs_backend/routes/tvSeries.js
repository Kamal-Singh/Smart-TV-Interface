const express = require("express"),
  router = express.Router(),
  data = require("../mock_data/tvSeries");

router.get("/", (req, res) => {
  res.status(200).json(data);
});

module.exports = router;
