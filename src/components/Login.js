import React, { Component } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import "../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     firstName: "Shai",
    //     lastName: "Tachuma",
    //     password: this.state.password,
    //     email: this.state.username,
    //   }),
    // };
    // fetch("http://localhost:8080/v1/users", requestOptions)
    //   .then(async (response) => {
    //     const data = await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //       // get error message from body or default to response status
    //       const error = (data && data.message) || response.status;
    //       alert("Error in POST /v1/users");
    //       return Promise.reject(error);
    //     } else {
    //       alert(
    //         "UserName: " +
    //           this.state.username +
    //           " \nPassword: " +
    //           this.state.password
    //       );
    //     }
    //     // this.setState({ postId: data.id });
    //   })
    //   .catch((error) => {
    //     // this.setState({ errorMessage: error.toString() });
    //     alert("Error in POST /v1/users");
    //     console.error("There was an error!", error);
    //   });
    fetch("http://localhost:8080/v1/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: "Shai",
        lastName: "Tachuma",
        password: this.state.password,
        email: this.state.username,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Created Gist:", data.html_url);
      });

    event.preventDefault();
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <h1 id="login">Sign In</h1>
            <div className="form-group">
              <label className="centered">
                Email address
                <label style={{ color: "red", fontWeight: "bold" }}>*</label>
              </label>
              <input
                type="email"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label className="centered">
                Password
                <label style={{ color: "red", fontWeight: "bold" }}>*</label>
              </label>

              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ background: "green", borderColor: "green" }}
            >
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </Card>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Login;
