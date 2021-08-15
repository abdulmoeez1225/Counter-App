import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="text-center">
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>

          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              // id={counter.id}
              // value={counter.value}
              counter={counter}
            ></Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
