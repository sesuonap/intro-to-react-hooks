import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form.jsx";
import Form2 from "./Form2.jsx";
function App() {
    return (
        <div className="App">
            <h1>A Simple Form in React</h1>
            <Form />
            <h2>And now the same form, but using hooks </h2>
            <Form2 />
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
