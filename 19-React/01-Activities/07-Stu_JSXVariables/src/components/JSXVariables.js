import React from "react";

const name = "Trace";
const length ="five";
const react = "is shamwow";

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {length} letters</h2>
          <h2>I think React {react}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
