const express = require("express");
const path = require('path');
const { redirect } = require("../controllers/redirect");

const router = express.Router();

router.get("/",express.static(path.join(__dirname + '/../public')));
router.get("/:key", redirect);

module.exports = router;

