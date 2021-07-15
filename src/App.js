import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Naya",
//             animal: "Dog",
//             breed: "Sheepadoodle",
//         }),
//         React.createElement(Pet, {
//             name: "Nilo",
//             animal: "Dog",
//             breed: "Sheepadoodle",
//         }),
//         React.createElement(Pet, {
//             name: "Micky",
//             animal: "Monkey",
//             breed: "undefiend",
//         }),
//     ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, document.getElementById("root"));
