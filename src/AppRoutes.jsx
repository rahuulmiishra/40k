import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import Login from "./guest/login/Login";

const AppRoutes = (props) => {
  const { isUserLoggedIn = false } = props;

  if (isUserLoggedIn) {
    return <LoggedInUserRoute {...props} />;
  }

  return <LoggedOutUserRoute {...props} />;
};

const LoggedOutUserRoute = (props) => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login {...props} />
      </Route>
      <Route render={(props) => <Redirect to={"/"} {...props} />} />
    </Switch>
  );
};

const LoggedInUserRoute = (props) => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home {...props} />
      </Route>
      <Route render={(props) => <Redirect to={"/"} {...props} />} />
    </Switch>
  );
};

export default AppRoutes;
