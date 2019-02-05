import React from 'react';
import UserCard from './UserCard';
import CountdownClock from './CountdownClock';

const HomePage = props => {
  const users = props.users.map(({user, _id}) => {
    return <UserCard user={user} key={_id} />;
  });
  return (
    <div>
      <CountdownClock />
      <div className="ui link cards">{users}</div>
    </div>
  );
};

export default HomePage;