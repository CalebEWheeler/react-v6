import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Vinny",
      animal: "Dog",
      breed: "Canaan Dog",
    }),
    React.createElement(Pet, {
      name: "Raylee",
      animal: "Dog",
      breed: "Flat Coated Retriever",
    }),
    React.createElement(Pet, {
      name: "Sadie",
      animal: "Dog",
      breed: "Labrador Retriever",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
