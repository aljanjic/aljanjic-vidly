import React, { Component } from "react";

class Like extends Component {
  render() {
    const { liked, onLike } = this.props;

    const classes = liked === true ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        onClick={() => onLike()}
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
