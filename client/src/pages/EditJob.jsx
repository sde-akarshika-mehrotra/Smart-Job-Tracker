import "./EditJob.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateJob } from "../api/jobApi";

function EditJob({ jobs, setJobs }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        company: "",
        role: "",
        status: "",
        location: "",
        date: "",
        notes: ""
    });

    
    useEffect(() => {
        const selectedJob = jobs.find(
            (job) => job._id === id
        );

        if (selectedJob) {
            setFormData(selectedJob);
        }
    }, [id, jobs]);


    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const updated = await updateJob(id, formData);

    
            setJobs((prev) =>
                prev.map((job) =>
                    job._id === id ? updated.data : job
                )
            );

            navigate("/");
        } catch (error) {
            console.log("Update error:", error);
        }
    };



    return (
        <>
            <Navbar />

            <div className="edit-container">
                <h1 className="edit-title">Edit Job</h1>

                <form
                    className="edit-form"
                    onSubmit={handleSubmit}>

                    <input
                        className="edit-input"
                        name="company"
                        value={formData.company || ""}
                        onChange={handleChange}
                    />

                    <input
                        className="edit-input"
                        name="role"
                        value={formData.role || ""}
                        onChange={handleChange}
                    />

                    <select
                        className="edit-input"
                        name="status"
                        value={formData.status || ""}
                        onChange={handleChange}
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                    <input
                        className="edit-input"
                        name="location"
                        value={formData.location || ""}
                        onChange={handleChange}
                    />

                    <input
                        className="edit-input"
                        name="date"
                        value={formData.date || ""}
                        onChange={handleChange}
                    />

                    <textarea
                        className="edit-textarea"
                        name="notes"
                        value={formData.notes || ""}
                        onChange={handleChange}
                    />

                    <button
                        className="update-btn"
                        type="submit">
                        Update Job
                    </button>
                </form>
            </div>
        </>
    );
}

export default EditJob;