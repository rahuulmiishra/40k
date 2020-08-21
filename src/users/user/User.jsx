import React from "react";

import "./_user.scss";

const User = (props) => {
  const { title = "" } = props;

  return <div className="user">{title}</div>;
};

export default User;
