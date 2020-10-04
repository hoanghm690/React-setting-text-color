import React, { Component } from "react";

class Reset extends Component {
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  };
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary float-left mt-4"
        onClick={this.onResetDefault}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
