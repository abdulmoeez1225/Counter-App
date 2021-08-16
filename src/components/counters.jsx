import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div className="container pt-5">
        <div className="text-center">
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>

          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
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
