import React, { useState } from "react";

import Form from "../../components/form/Form";

const SUBMIT_BUTTON_TEXT = "Login";

const LoginModel = [
  {
    error: "",
    id: "email",
    isValid: true,
    isRequired: true,
    label: "Email",
    name: "email",
    value: "",
  },
  {
    error: "",
    id: "password",
    isValid: true,
    isRequired: true,
    label: "Password",
    name: "password",
    value: "",
    type: "password",
  },
];

const Login = (props) => {
  const { handleLogin } = props;
  const [inputModels, updateInputModels] = useState(LoginModel);

  const handleInputChange = ({ index = 0, value = "" }) => {
    const existingInput = [...inputModels];
    existingInput[index].value = value;
    updateInputModels(existingInput);
  };

  const handleSubmit = (data) => {
    console.log("handleLogin", data);
    handleLogin();
  };

  return (
    <Form
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      inputs={inputModels}
      submitButtonText={SUBMIT_BUTTON_TEXT}
    />
  );
};

export default Login;
