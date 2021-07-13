import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

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
      <Pet name="Naya" animal="Dog" breed="sheepadoodle" />
      <Pet name="Neyo" animal="Dog" breed="sheepadoodle" />
      <Pet name="Cleo" animal="Cat" breed="sphinx" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
