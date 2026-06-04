function JobCard({ job }) {

    return (
        <div className="job-card">

            <h3>{job.company}</h3>

            <p>{job.role}</p>

            <p>{job.status}</p>

            <p>{job.location}</p>

        </div>
    );
    
}

export default JobCard;