import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //   Approach-1 using if else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Ayush</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //Approach-2 using element variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Ayush</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //Approach-3 Using Ternary opertor
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Ayush</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Approach - 4 Short circuit
    return this.state.isLoggedIn && <div>Welcome Ayush</div>;
  }
}

export default UserGreeting;
