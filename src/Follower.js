import React from "react";

export const Follower = ({ login, avatar_url }) => {
  return (
    <div>
      <h1>{login}</h1>
      <img src={avatar_url} alt={login} />
    </div>
  );
};

export default Follower;
