const express = require("express");
const { removeShortenUrl } = require("../controllers/remove");

const router = express.Router();

router.delete("/:key", removeShortenUrl);

module.exports = router;

