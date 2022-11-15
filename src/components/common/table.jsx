import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

class Table extends Component {
  render() {
    const { onSort, onLike, onDelete, tabeleItems, sortOrder, tableHeaders } =
      this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          tableHeaders={tableHeaders}
          sortOrder={sortOrder}
        />
        <TableBody
          tabeleItems={tabeleItems}
          onLike={onLike}
          onDelete={onDelete}
        />
      </table>
    );
  }
}

export default Table;
