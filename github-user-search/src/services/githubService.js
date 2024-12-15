import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  let q = [`q=${username}`];

  if (location) {
    q += `+location:${location}`;
  }

  if (minRepos) {
    q += `+repos:>=${minRepos}`;
  }

 
  try {
    // Step 1: Search for users
    const searchResponse = await axios.get(
      `https://api.github.com/search/users?${q}`
    );
    const users = searchResponse.data.items;

    // Step 2: Fetch detailed data for each user
    const userDetails = await Promise.all(
      users.map(async (user) => {
        const userResponse = await axios.get(
          `https://api.github.com/users/${user.login}`
        );
        return userResponse.data; // Return full user data
      })
    );

    return userDetails; // Full data for all users
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

