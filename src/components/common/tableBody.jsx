import React, { Component } from "react";
import Like from "./like";
import { Link } from "react-router-dom";

class TableBody extends Component {
  render() {
    const { tabeleItems, onLike, onDelete } = this.props;

    return (
      <tbody>
        {tabeleItems.map((movie) => (
          <tr key={movie._id}>
            {/* <td>{movie.title}</td> */}
            <td>
              <Link to={movie._id} style={{ textDecoration: "none" }}>
                {movie.title}
              </Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLike={() => onLike(movie)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      // <tbody>
      //   {tabeleItems.map((movie) => (
      //     <tr key={movie._id}>
      //       <td>{movie.title}</td>
      //       <td>{movie.genre.name}</td>
      //       <td>{movie.numberInStock}</td>
      //       <td>{movie.dailyRentalRate}</td>
      //       <td>
      //         <Like liked={movie.liked} onLike={() => onLike(movie)} />
      //       </td>
      //       <td>
      //         <button
      //           className="btn btn-danger btn-sm"
      //           onClick={() => onDelete(movie)}
      //         >
      //           Delete
      //         </button>
      //       </td>
      //     </tr>
      //   ))}
      // </tbody>
    );
  }
}

export default TableBody;
