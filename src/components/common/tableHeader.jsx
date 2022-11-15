import React, { Component } from "react";

class TableHeader extends Component {
  sortOrder = (path) => {
    const sortOrder = { ...this.props.sortOrder };
    if (sortOrder.path === path) {
      sortOrder.orderBy =
        this.props.sortOrder.orderBy === "asc" ? "desc" : "asc";
    } else {
      sortOrder.path = path;
      sortOrder.orderBy = "asc";
    }

    return sortOrder;
  };

  renderSortIcon = (tableHeader) => {
    if (tableHeader.path !== this.props.sortOrder.path) return null;
    if (this.props.sortOrder.orderBy === "desc")
      return <i className="fa fa-sort-down"></i>;

    return <i className="fa fa-sort-up"></i>;
  };

  render() {
    const { onSort, tableHeaders } = this.props;

    return (
      <thead>
        <tr>
          {tableHeaders.map((tableHeader) => (
            <th
              style={{ cursor: "pointer" }}
              onClick={() => onSort(this.sortOrder(tableHeader.path))}
              key={tableHeader.path}
            >
              {tableHeader.lable} {this.renderSortIcon(tableHeader)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
