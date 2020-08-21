import React from "react";

import User from "./user/User";

const Users = (props) => {
  const { users = [] } = props;

  return (
    <div className="users">
      {users.map((user, index) => {
        const { email = "" } = user;
        return <User title={email} key={index} />;
      })}
    </div>
  );
};

export default Users;
