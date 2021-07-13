const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Naya",
      animal: "Dog",
      breed: "Sheepadoodle",
    }),
    React.createElement(Pet, {
      name: "Nilo",
      animal: "Dog",
      breed: "Sheepadoodle",
    }),
    React.createElement(Pet, {
      name: "Micky",
      animal: "Monkey",
      breed: "undefiend",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
