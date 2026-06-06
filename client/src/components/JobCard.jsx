import { useNavigate } from "react-router-dom";
import { deleteJob } from "../api/jobApi";


function JobCard({ job, jobs, setJobs }) {
    const navigate = useNavigate();

    const handledelete = async () => {
        try {
            await deleteJob(job._id);

            setJobs((prev) =>
                prev.filter((j) => j._id !== job._id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="job-card">

            <h3>{job.company}</h3>

            <p>{job.role}</p>

            <p>{job.status}</p>

            <p>{job.location}</p>

            <div className="btn-group">
                <button className="edit-btn" onClick={() => navigate(`/edit/${job._id}`)}>Edit</button>

                <button className="delete-btn" onClick={handledelete}>Delete</button>
            </div>
        </div>
    );
}

export default JobCard;