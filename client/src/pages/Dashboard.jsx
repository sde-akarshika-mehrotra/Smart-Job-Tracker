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

            <h1>Dashboard</h1>

            <div style={{ marginBottom: "20px" }}>

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


            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

                <StatsCard title="Total Applications" value={total} />
                <StatsCard title="Applied" value={applied} />
                <StatsCard title="Interview" value={interview} />
                <StatsCard title="Selected" value={selected} />
                <StatsCard title="Rejected" value={rejected} />

            </div>

            <hr />

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
                    <p>No jobs found</p>
                )
            }
        </>
    );

}

export default Dashboard;