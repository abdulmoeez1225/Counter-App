import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageURL: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // renderTag() {
  //   if (this.state.tags.length === 0) return <p>There is no tags !</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   console.log("constructor", this);
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (product) => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    const { value } = this.props.counter;
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   console.log("prevProps", prevProps);
    // }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/* <p> Counter #{this.props.id}</p> */}
          {/* <img src={this.state.imageURL} alt="" /> */}
          <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>

          {/* {this.state.tags.length === 0 && "please create a new tags!"}
          {this.renderTag()} */}
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
