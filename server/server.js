const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();

const jobRoutes = require("./routes/jobRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


let jobs = [];

//CREATE
app.post("/jobs", (req, res) => {
    const newJob = {
        id: Date.now(),
        ...req.body
    };

    jobs.push(newJob);

    res.json({ message: "Job Added", job: newJob });
});


// READ
app.get("/jobs", (req, res) => {
    res.json(jobs);
});


// UPDATE
app.put("/jobs/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = jobs.findIndex(job => job.id === id);

    if (index === -1) {
        return res.json({ message: "Job not found" });
    }

    jobs[index] = { ...jobs[index], ...req.body };

    res.json({
        message: "Job Updated",
        updatedJob: jobs[index]
    });
});


// DELETE
app.delete("/jobs/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const newJobs = jobs.filter(job => job.id !== id);

    if (newJobs.length === jobs.length) {
        return res.json({ message: "Job not found" });
    }

    jobs = newJobs;

    res.json({ message: "Job Deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});