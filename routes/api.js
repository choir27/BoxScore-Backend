const express = require("express");
const app = express();
const router = express.Router();
const apiController = require("../controllers/api");



app.get("/", apiController.getNBA);

module.exports = router