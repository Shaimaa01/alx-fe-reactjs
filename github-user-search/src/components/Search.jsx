import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [data, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(username);
  };

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div>
            <img
              src={data.avatar_url}
              alt={`${data.login}'s avatar`}
              width="100"
            />
            <h2>{data.name || data.login}</h2>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
