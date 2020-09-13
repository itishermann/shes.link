const express = require("express");
const { redirect } = require("../controllers/redirect");

const router = express.Router();

router.get("/:key", redirect);

module.exports = router;

