import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./components/HomePage";

// import logo from "./logo.svg";
// import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import ParentComponnet from "./components/ParentComponnet";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
      {/* <RefsDemo /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <Stylesheet /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Nir">
        <p1>He was my team leader in Radware</p1>
      </Greet>
      <Greet name="Danny">
        <button>Action</button>
      </Greet>
      <Greet name="Liat" /> */}
      {/* <Welcome name="Nir" heroName="Batman" />
      <Welcome name="Danny" heroName="Superman" />
      <Welcome name="Liat" heroName="Wonder Women" /> */}
    </div>
  );
}
export default App;
