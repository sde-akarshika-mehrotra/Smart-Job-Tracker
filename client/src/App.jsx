import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobs } from "./api/jobApi";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobList from "./pages/JobList";
import EditJob from "./pages/EditJob";
import GitHubProfile from "./pages/GitHubProfile";


function App() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobs();
        console.log(res.data);
        setJobs(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard jobs={jobs} setJobs={setJobs} />} />
        <Route path="/add-job" element={<AddJob jobs={jobs} setJobs={setJobs} />} />
        <Route path="/jobs" element={<JobList jobs={jobs} setJobs={setJobs} />} />
        <Route path="/edit/:id" element={<EditJob jobs={jobs} setJobs={setJobs} />} />
        <Route path="/github" element={<GitHubProfile />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;