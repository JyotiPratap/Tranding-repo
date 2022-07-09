const express = require('express');
const router = express.Router();
const controllers= require("../controller/controller.js")

router.get("/Tranding-repo",controllers.Tranding_repo)

module.exports = router;