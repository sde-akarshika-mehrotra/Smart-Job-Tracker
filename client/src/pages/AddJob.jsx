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

    const handleSubmit = async(e) => {
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
            <h1>AddJob</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={formData.status}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Job
                </button>
            </form>
        </>
    );

}

export default AddJob;