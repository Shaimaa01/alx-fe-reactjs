// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return <h2>Welcome to the profile of user {userId}</h2>;
};

export default UserProfile;
