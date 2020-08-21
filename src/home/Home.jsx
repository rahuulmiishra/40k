import React, { useState } from "react";

import Form from "../components/form/Form";
import Users from "../users/Users";

import "./_home.scss";

const USER_FORM_SUBMIT_TEXT = "Add User";
const Mode = {
  ADD_MODE: "addMode",
  VIEW_MODE: "viewMode",
};
Object.freeze(Mode);

const UserModel = [
  {
    error: "",
    id: "userName",
    isValid: true,
    isRequired: true,
    label: "User's Email",
    name: "email",
    value: "",
  },
  {
    error: "",
    id: "password",
    isValid: true,
    isRequired: true,
    label: "User's Password",
    name: "password",
    value: "",
  },
];

const Home = (props) => {
  const [users, updateUsers] = useState([]);
  const [mode, updateMode] = useState(Mode.ADD_MODE);

  const [inputModels, updateInputModels] = useState(UserModel);

  const handleInputChange = ({ index = 0, value = "" }) => {
    const existingInput = [...inputModels];
    existingInput[index].value = value;
    updateInputModels(existingInput);
  };

  const handleSubmit = ({ email = "", password = "" }) => {
    const existingUsers = [...users];
    existingUsers.push({ email, password });
    updateUsers(existingUsers);
    resetFormValues();
  };

  const resetFormValues = () => {
    const existingInput = inputModels.map((input) => {
      input.value = "";
      return input;
    });
    updateInputModels(existingInput);
  };

  const updateViewMode = () => {
    const newMode = mode === Mode.ADD_MODE ? Mode.VIEW_MODE : Mode.ADD_MODE;
    updateMode(newMode);
  };

  return (
    <div className="home">
      <div>Number of users ({users.length}) </div>
      <div>
        {mode === Mode.ADD_MODE && (
          <Form
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            inputs={inputModels}
            submitButtonText={USER_FORM_SUBMIT_TEXT}
          />
        )}
        {mode === Mode.VIEW_MODE && <Users users={users} />}
      </div>
      <div className="toggleButton" onClick={updateViewMode}>
        Toggle View
      </div>
    </div>
  );
};

export default Home;
