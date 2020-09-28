import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbo />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
