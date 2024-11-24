/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Link to="/profile">Go to Profile</Link>
  </div>
);

export default Home;
