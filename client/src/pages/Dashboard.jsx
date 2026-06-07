import "./Dashboard.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import StatsCard from "../components/StatsCard";

function Dashboard({ jobs, setJobs }) {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const total = jobs.length;
    const applied = jobs.filter(job => job.status === "Applied").length;
    const interview = jobs.filter(job => job.status === "Interview").length;
    const selected = jobs.filter(job => job.status === "Selected").length;
    const rejected = jobs.filter(job => job.status === "Rejected").length;


    const filteredJobs = jobs.filter(job => {

        const matchSearch =
            job.company.toLowerCase().includes(search.toLowerCase());

        const matchFilter =
            filter === "All" || job.status === filter;

        return matchSearch && matchFilter;
    });


    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <h1 className="page-title">Dashboard</h1>

                <div className="search-filter">

                    <input
                        type="text"
                        placeholder="Search company..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                </div>

                <div className="stats">

                    <div className="stat-card">
                        <h3>Total Applications</h3>
                        <h1>{total}</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Applied</h3>
                        <h1>{applied}</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Interview</h3>
                        <h1>{interview}</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Selected</h3>
                        <h1>{selected}</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Rejected</h3>
                        <h1>{rejected}</h1>
                    </div>

                </div>

                <h2 className="section-title">
                    Recent Applications
                </h2>

                <div className="job-grid">
                    {
                        filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <JobCard
                                    key={job._id}
                                    job={job}
                                    jobs={jobs}
                                    setJobs={setJobs}
                                />
                            ))
                        ) : (
                            <p className="not-found">No jobs found ❌</p>
                        )
                    }
                </div>
            </div>
        </>
    );

}

export default Dashboard;