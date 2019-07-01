import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import { connect } from "react-redux";

class Counter1 extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.increment}
          id="btn"
          className="btn btn-secondary"
        >
          Increment
        </button>

        <button
          type="button"
          onClick={this.props.decrement}
          id="btn"
          className="btn btn-warning"
        >
          Decrement
        </button>

        {this.props.state.count}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispachToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Counter1);
