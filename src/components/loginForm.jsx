import React from "react";
import Form from "./common/form";
import Joi from "joi";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    console.log("Submited");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} id="myForm">
          {this.renderInput("username", "Username")}
          <div id="emailHelp" className="form-text m-2">
            We'll never share your email with anyone else.
          </div>
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
