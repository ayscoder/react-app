import React from "react";
import { Switch, NavLink, Link, Route } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Emp from "./Emp";
import AppStyle from "./AppStyle.css";

function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <NavLink to="/ContactUs" activeClassName="testClass">
            ContactUs
          </NavLink>
        </li>
        <li>
          <NavLink to="/signIn" activeClassName="testClass">
            SignIn
          </NavLink>
        </li>
        <li>
          <NavLink to="/signUp" activeClassName="testClass">
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink to="/emp" activeClassName="testClass">
            Employee
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={About}></Route>
        <Route path="/contactUs" component={ContactUs}></Route>
        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/signUp" component={SignUp}></Route>
        <Route path="/emp" component={Emp}></Route>
      </Switch>
    </div>
  );
}

export default HomePage;
