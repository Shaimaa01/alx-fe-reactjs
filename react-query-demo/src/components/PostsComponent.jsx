/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isError, isLoading, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 60, // Data remains fresh for 1 minute
      refetchOnWindowFocus: false, // Disable refetch on window focus
      keepPreviousData: true, // Show previous data while fetching new data
    }
  );

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Could not fetch posts</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <div>Updating...</div>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
