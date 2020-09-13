const express = require("express");
const { createShortenUrl } = require("../controllers/shorten");

const router = express.Router();

router.put("/shorten", createShortenUrl);

module.exports = router;

