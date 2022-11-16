import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

import { Link } from "react-router-dom";

import SearchBox from "./searchBox";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "./utils/paginate";
import _ from "lodash";
// import LoadBar from "./common/loadBar";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,

    searchQuery: "",

    currentGenre: {
      _id: 0,
      name: "All Genres",
    },

    sortOrder: { path: "title", orderBy: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      currentGenre: {
        _id: 0,
        name: "All Genres",
      },
      currentPage: 1,
    });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortOrder) => {
    this.setState({ sortOrder });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortOrder,
      currentGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (currentGenre && currentGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === currentGenre._id);

    const sorted = _.orderBy(filtered, [sortOrder.path], [sortOrder.orderBy]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const {
      currentPage,
      pageSize,
      genres,
      currentGenre,
      sortOrder,
      searchQuery,
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <h2>There are no more movies in database.</h2>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row" style={{ margin: "40px 0 0 0 " }}>
          <div className="col-2">
            <ListGroup
              genres={genres}
              currentGenre={currentGenre}
              onGenreChange={this.handleGenreChange}
            />
          </div>
          <div className="col">
            <Link to="/movies/new" className="btn btn-primary ">
              New Movie
            </Link>
            <p style={{ margin: "10px 0 10px 0" }}>
              Showing {totalCount} movies in database.
            </p>

            <SearchBox value={searchQuery} onChange={this.handleSearch} />

            <MoviesTable
              onSort={this.handleSort}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              sortOrder={sortOrder}
              tableBody={movies}
            />

            <Pagination
              onPageChange={this.handlePageChange}
              pageSize={pageSize}
              numberOfItems={totalCount}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
