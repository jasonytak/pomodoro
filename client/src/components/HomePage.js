import React from 'react';
import UserCard from './UserCard';

const HomePage = props => {
  const users = props.users.map(user => {
    return (
      <UserCard user={user} />
    );
  });
  return <div>{users}</div>;
};

export default HomePage;
