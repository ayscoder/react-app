import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponnet extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    console.log("Hello");
    alert(`Hello ${this.state.message}`);
    // alert(`Hello ${this.state.message} from ${childName}`);
  }

  render() {
    return (
      <div>
        {/* pass method as props to child component so that child component can
        call this method */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponnet;
