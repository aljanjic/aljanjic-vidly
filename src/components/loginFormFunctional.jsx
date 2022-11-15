import React from "react";
import Joi from "joi";
import { useState } from "react";
import Input from "./common/input";

const LoginForm = (props) => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const localSchema = Joi.object({ [name]: schema[name] });
    const { error } = localSchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    const errors2 = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errors2[input.name] = errorMessage;
    } else {
      delete errors2[input.name];
    }
    setAccount({ ...account, [input.name]: input.value });
    setErrors(errors2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (!errors) {
      errors = {};
    }
    setErrors(errors);
    if (errors) return;
    // call the server
    console.log("submited");
  };

  const validate = () => {
    const options = {
      abortEarly: false,
    };
    const localSchema = Joi.object(schema);
    const { error } = localSchema.validate(account, options);

    if (!error) return null;
    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} id="myForm">
        <Input
          name={"username"}
          value={account.username}
          label={"Username"}
          onChange={handleChange}
          error={errors.username}
        />

        <div id="emailHelp" className="form-text m-2">
          We'll never share your email with anyone else.
        </div>

        <Input
          name={"password"}
          value={account.password}
          label={"Password"}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          disabled={validate}
          type="submit"
          className="btn btn-primary"
          form="myForm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
