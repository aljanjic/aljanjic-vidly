import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    const tableHeaders = [
      {
        path: "title",
        lable: "Title",
      },
      {
        path: "genre.name",
        lable: "Genre",
      },
      {
        path: "numberInStock",
        lable: "Stock",
      },
      {
        path: "dailyRentalRate",
        lable: "Rental Rate",
      },
      {
        path: "like",
        lable: "",
      },
      {
        path: "delete",
        lable: "",
      },
    ];
    const { onSort, onLike, onDelete, tableBody, sortOrder } = this.props;

    return (
      <Table
        onSort={onSort}
        onLike={onLike}
        onDelete={onDelete}
        tabeleItems={tableBody}
        tableHeaders={tableHeaders}
        sortOrder={sortOrder}
      />
    );
  }
}

export default MoviesTable;
