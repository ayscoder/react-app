import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    //this is async call
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <div>
          <button
            onClick={() => {
              this.increment();
            }}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
