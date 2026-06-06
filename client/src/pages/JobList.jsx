import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterDropDown from "../components/FilterDropdown";

function JobsList({ jobs, setJobs }) {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");


    const filteredJobs = (jobs || []).filter((job) => {

        const matchesSearch =
            job.company.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            filter === "All" ? true : job.status === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <>
            <Navbar />

            <div className="dashboard-container">

                <h1 className="page-title">Jobs List</h1>

                <div className="search-filter">

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <FilterDropDown
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>

                <div className="job-grid">
                    {filteredJobs.length > 0 ? (
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
                    )}
                </div>
            </div>

        </>
    );
}

export default JobsList;