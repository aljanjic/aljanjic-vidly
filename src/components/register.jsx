import React from "react";
import Form from "./common/form";
import Joi from "joi";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Username"),
    password: Joi.string().required().min(8).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // call the server
    console.log("Register Submited");
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} id="myForm">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
