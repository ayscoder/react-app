import React from "react";
import PersonList from "./PersonList";

function NameList() {
  const persons = [
    { id: 1, name: "Danny", age: 40 },
    { id: 2, name: "Nir", age: 38 },
    { id: 3, name: "Liat", age: 28 },
  ];
  //Calling PersonList component to render person object by passing person props and key props with person id value
  const personList = persons.map((person) => (
    <PersonList key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
