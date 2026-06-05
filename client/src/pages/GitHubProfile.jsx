import { useState } from "react";
// import Navbar from "../components/Navbar";

function GitHubProfile() {

    const [username, setUsername] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUser = async () => {

        if (!username.trim()) {
            setError("Please enter username");
            return;
        }

        setLoading(true);
        setError("");
        setData(null);

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);

            if (!res.ok) {
                setError("User not found!");
                setLoading(false);
                return;
            }

            const json = await res.json();
            setData(json);

        } catch (err) {
            setError("Something went wrong!");
        }

        setLoading(false);
    };

    return (
        <>
            {/* <Navbar /> */}

            <div style={{ padding: "20px" }}>
                <h1>GitHub Profile</h1>

                <input
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button onClick={fetchUser}>
                    Search
                </button>

                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {data && (
                    <div style={{ marginTop: "20px" }}>
                        <img
                            src={data.avatar_url}
                            width="120"
                            style={{ borderRadius: "50%" }}
                        />

                        <h2>{data.name || "No Name"}</h2>

                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p>
                        <p>Public Repos: {data.public_repos}</p>

                        <a href={data.html_url} target="_blank" rel="noreferrer">
                            Visit Profile
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default GitHubProfile;