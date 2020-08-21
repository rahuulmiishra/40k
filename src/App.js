import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./AppRoutes";

import "./App.css";

function App() {
  const [isUserLoggedIn, updateUserLoginStatus] = useState(false);

  const handleLogin = () => {
    updateUserLoginStatus(true);
  };

  return (
    <div className="App">
      <Router>
        <AppRoutes isUserLoggedIn={isUserLoggedIn} handleLogin={handleLogin} />
      </Router>
    </div>
  );
}

export default App;
