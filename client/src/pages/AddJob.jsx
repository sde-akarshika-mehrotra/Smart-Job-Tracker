import "./AddJob.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { createJob } from "../api/jobApi";

function AddJob({ jobs, setJobs }) {

    const [formData, setFormData] = useState({
        company: "",
        role: "",
        status: "",
        location: "",
        date: "",
        notes: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await createJob(formData);

            setJobs([...jobs, res.data]);

            console.log("Job Added");
        } catch (error) {
            console.error(error);
        }


        setFormData({
            company: "",
            role: "",
            status: "",
            location: "",
            date: "",
            notes: ""
        });
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">

                <h1 className="page-title">
                    Add New Job
                </h1>

                <form className="job-form" onSubmit={handleSubmit}>

                    <input
                        className="form-input"
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="text"
                        name="role"
                        placeholder="Role"
                        value={formData.role}
                        onChange={handleChange}
                    />

                    <select
                        className="form-input"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="">Select Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                    <input
                        className="form-input"
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-textarea"
                        name="notes"
                        placeholder="Notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />

                    <button className="submit-btn" type="submit">
                        Add Job
                    </button>
                </form>
            </div>
        </>
    );

}

export default AddJob;