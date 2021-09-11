const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Raylee"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Retriever")
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),

        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));