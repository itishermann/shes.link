const express = require("express");
const { createShortenUrl } = require("../controllers/shorten");

const router = express.Router();

router.get("/:id", createShortenUrl);

module.exports = router;

