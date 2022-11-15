import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { genres, onGenreChange, currentGenre } = this.props;

    const genres2 = [{ _id: 0, name: "All Genres" }].concat([...genres]);

    return (
      <ul className="list-group">
        {genres2.map((genre) => (
          <li
            className={
              currentGenre.name === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onGenreChange(genre)}
            style={{ cursor: "pointer" }}
            key={genre._id}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
