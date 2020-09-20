import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* Call greetParent method of ParentComponent using props */}
      <button onClick={props.greetHandler}>GreetParent</button>
      {/* <button onClick={() => props.greetHandler("ayush")}>GreetParent</button> */}
    </div>
  );
}
export default ChildComponent;
