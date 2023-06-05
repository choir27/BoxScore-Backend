const mongoose = require("mongoose");

const NBASchema = new mongoose.Schema({
    data: {
       type: Object, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("NBA", NBASchema);