const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    company: String,
    role: String,
    status: String,
    location: String,
    notes: String,
    applicationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Job", JobSchema);