import React, { Comment, Component } from "react";

class Message extends Component {
  constructor() {
    super();
    //define states
    this.state = {
      message: "Hello Visitor",
    };
  }

  /**
   * Change state using this function
   */
  changeMessage = () => {
    this.setState({
      message: "Thank you for subscribing Ayush",
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        {/* render state */}
        <h1>{message}</h1>

        {/* Change state */}
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
