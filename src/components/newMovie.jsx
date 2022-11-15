import React from "react";
import Joi from "joi";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import Select from "./common/select";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: [], numberInStock: "", rate: "" },
    errors: {},
    genres: getGenres(),
  };

  componentDidMount() {
    // const genres = {}
    this.setState({ genres: getGenres() });
  }

  schema = {
    title: Joi.string().alphanum().required().label("Title"),
    // genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().min(0).max(100).required().label("Rate"),
  };

  doSubmit = () => {
    // call the server
    console.log("New Movie Submited");
  };

  render() {
    return (
      <React.Fragment>
        {/* console.log(this.state.genres) */}
        <form onSubmit={this.handleSubmit} id="myForm">
          {this.renderInput("title", "Title")}
          <Select name={"genre"} lable={"Genre"} data={this.state.genres} />
          {this.renderInput("numberInStock", "Number in stock ")}
          {this.renderInput("rate", "Rate")}

          {this.renderButton("Add Movie")}
        </form>
        {/* <button onClick={() => submitForm()} className="btn btn-primary">
          <NavLink to="/movies" className="nav-link" aria-current="page">
            Save
          </NavLink>{" "}
        </button> */}
      </React.Fragment>
    );
  }
}

export default NewMovie;
