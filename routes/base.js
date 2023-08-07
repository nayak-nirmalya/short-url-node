const express = require("express");

const { handleGetURL } = require("../controllers/base");

const router = express.Router();

router.get("/:shortId", handleGetURL);

module.exports = router;
