import React from 'react';
import UserCard from './UserCard';
import CountdownClock from './CountdownClock';

// class HomePage extends React.Component {

//   render() {
//     return (
//       <div>
//         <div>Hello</div>
//       </div>
//     );
//   }
// }

const HomePage = props => {
  const users = props.users.map(({user}) => {
    console.log(user);
    return <UserCard user={user} />;
  });
  return (
    <div>
      <CountdownClock />
      <div className="ui link cards">{users}</div>
    </div>
  );
};

export default HomePage;
