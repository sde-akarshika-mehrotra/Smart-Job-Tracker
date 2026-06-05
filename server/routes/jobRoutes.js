const express = require("express");
const router = express.Router();

const Job = require("../models/Job");

//CREATE
router.post("/", async (req, res) => {
    const job = await Job.create(req.body);
    res.json(job);
});

//READ ALL
router.get("/", async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

//UPDATE
router.put("/:id", async (req, res) => {
    const updated = await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

//DELETE
router.delete("/:id", async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;