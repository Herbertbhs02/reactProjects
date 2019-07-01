import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import { connect } from "react-redux";

class Counter2 extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.incr}
          id="btn"
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={this.props.incr}
          id="btn"
          className="btn btn-warning"
        >
          Decrement
        </button>
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
    incr: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Counter2);
