import React, { Component } from "react";

class LoadBar extends Component {
  state = {
    loadBarStyles: {
      backgroundColor: "red",
      width: "200px",
      height: "20px",
    },

    loadStyles: {
      backgroundColor: "blue",
      width: 0,
      height: "20px",
    },
  };

  task = (i) => {
    setTimeout(() => {
      const loadStyles = { ...this.state.loadStyles };
      loadStyles.width += 2;
      this.setState({ loadStyles });
    }, 1000 * i);
  };

  handleLoading = () => {
    for (let i = 0; i < 100; i++) {
      this.task(i);
    }
  };

  render() {
    return (
      <div
        onClick={this.handleLoading}
        className="loadBar"
        style={this.state.loadBarStyles}
      >
        <div className="load" style={this.state.loadStyles}></div>
      </div>
    );
  }
}

export default LoadBar;
