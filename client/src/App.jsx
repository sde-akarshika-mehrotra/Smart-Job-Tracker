import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobList from "./pages/JobList";
import EditJob from "./pages/EditJob";
import GithubProfile from "./pages/GithubProfile";


function App() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      role: "Frontend Intern",
      status: "Applied",
      location: "Remote"
    },
    {
      id: 2,
      company: "Microsoft",
      role: "React Developer",
      status: "Interview",
      location: "Bangalore"
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard jobs={jobs} />} />
        <Route path="/add-job" element={<AddJob jobs={jobs} setJobs={setJobs} />} />
        <Route path="/jobs" element={<JobList jobs={jobs} />} />
        <Route path="/edit-job" element={<EditJob />} />
        <Route path="/github" element={<GithubProfile />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;