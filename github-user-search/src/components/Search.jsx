import { useState } from "react";

import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState();
  const [data, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(username, location, minRepos);
  };

  const handleSearch = async (username, location, minRepos) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  if (data) {
    console.log(data);
    console.log(data[0].login);
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className="block mx-auto w-1/4 h-12 p-2 rounded bg-slate-200 placeholder:italic placeholder:text-slate-400 outline-none"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="block my-4 mx-auto w-1/4 h-12 p-2 rounded bg-slate-200 placeholder:italic placeholder:text-slate-400 outline-none"
          type="text"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="block my-4 mx-auto w-1/4 h-12 p-2 rounded bg-slate-200 placeholder:italic placeholder:text-slate-400 outline-none"
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white p-3 rounded ml-3 font-medium"
          type="submit"
        >
          Search
        </button>
      </form>

      <div>
        {loading && <p className="text-white pt-1">Loading...</p>}
        {error && <p className="text-red-800 pt-1">{error}😔</p>}

        {/* result box */}
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.id}
                className="mx-auto bg-slate-700 w-full  mt-4 rounded shadow-md p-4 text-slate-400 font-medium"
              >
                <img
                  src={item.avatar_url}
                  alt={`${item.login}'s avatar`}
                  className="rounded-full mx-auto w-1/2"
                />
                <h2 className="py-4 text-xl">{item.name || item.login}</h2>
                <p>{item.location || "Location not available"}</p>
                <p>Repositories: {item.public_repos}</p>
                <a
                  className="text-sky-700"
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 ">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
