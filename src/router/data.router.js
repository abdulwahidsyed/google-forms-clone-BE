const express = require("express");
const { getData, postData } = require("../controller/data.controller");

const router = express.Router();

router.get("/", getData);
router.post("/", postData);

module.exports = router;
