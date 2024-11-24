/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

// Initialize QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  );
}

export default App;
