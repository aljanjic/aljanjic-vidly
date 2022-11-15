import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { numberOfItems, pageSize, currentPage, onPageChange } = this.props;

    const numberOfPages = Math.ceil(numberOfItems / pageSize);

    if (numberOfPages === 1) return null;

    const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className="page-link "
                style={{ cursor: "pointer" }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
