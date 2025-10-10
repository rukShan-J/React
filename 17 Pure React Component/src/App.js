const App = ()=>{
    // Define a React component using a function
    return React.createElement(
        "div", // HTML element type
        {}, // Props (empty in this case)
        React.createElement("h1",{},"My React App") // Child element               
    );
};

// Get the root DOM node
const container = document.getElementById("root");
// Create a React root for rendering (React 18+ feature)
const root = ReactDOM.createRoot(container);
// Render the App component inside the root element
root.render(React.createElement(App));