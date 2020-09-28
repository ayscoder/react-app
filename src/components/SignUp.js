import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
const SignUp = () => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <Card style={{ width: "18rem", padding: "10px", display: "inline-block" }}>
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label className="centered">
            First name
            <label style={{ color: "red", fontWeight: "bold" }}>*</label>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label className="centered">
            Last name
            <label style={{ color: "red", fontWeight: "bold" }}>*</label>
          </label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label className="centered">
            Email address
            <label style={{ color: "red", fontWeight: "bold" }}>*</label>
          </label>
          <input
            type="email"
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
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ background: "green", borderColor: "green" }}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
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
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);
export default SignUp;
