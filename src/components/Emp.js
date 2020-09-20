import React, { Component } from "react";
import AppStyle from "./AppStyle.css";
class Emp extends Component {
  constructor(props) {
    super();

    this.state = {
      emp: [
        { id: 1, name: "Nir Zinger", age: 28 },
        { id: 2, name: "Danny Gurman", age: 31 },
        { id: 3, name: "Liat Vaknin", age: 24 },
        { id: 4, name: "Dikla Zakey", age: 28 },
        { id: 5, name: "Rotem Inbar", age: 32 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emp.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Emp;
