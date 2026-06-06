import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <h2 className="logo">Smart Job Tracker</h2>

            <div className="nav-links">
                <Link to="/">Dashboard</Link>

                <Link to="/add-job">Add Job</Link>

                <Link to="/jobs">Jobs</Link>

                <Link to="/github">GitHub</Link>
            </div>
        </nav>

    );
}

export default Navbar;