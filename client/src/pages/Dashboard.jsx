import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import StatsCard from "../components/StatsCard";

function Dashboard( {jobs}) {

    return (
        <>
            <Navbar />

            <h1>Dashboard</h1>

            <StatsCard
                title="Total Applications"
                value={jobs.length} />


            {
                jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                    />
                ))
            }
        </>
    );

}

export default Dashboard;