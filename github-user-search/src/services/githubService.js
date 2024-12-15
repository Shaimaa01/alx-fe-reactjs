import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  let query = [`q=${username}`];

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  console.log(query);
  try {
    // Step 1: Search for users
    const searchResponse = await axios.get(
      `https://api.github.com/search/users?${query}`
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

fetchUserData("Shaimaa01")
  .then((data) =>
    console.log(
      data.forEach((item) => {
        console.log(item.location);
      })
    )
  )
  .catch((err) => console.error(err));
