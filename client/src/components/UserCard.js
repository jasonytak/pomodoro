import React from 'react';

const UserCard = props => {
  return (
    <div className="ui card">
      <div className="content">
        <a className="header">{props.user}</a>
      </div>
    </div>
  );
};

export default UserCard;