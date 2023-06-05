const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/NBA", apiController.getNBA);
router.post("/updateNBA", apiController.updateNBA);

module.exports = router