// Add a Student component
const Student = () => {
    return React.createElement(
        "div", // Parent div
        {},    // No props
        [
            // Child elements (array of React elements)
            React.createElement("h3", {}, "Amal"),      // Name
            React.createElement("h3", {}, 20),          // Age
            React.createElement("h3", {}, "Gampaha")    // City
        ]
    );
};

const App = ()=>{
    // Define a React component using a function
    return React.createElement(
        "div", // HTML element type
        {}, // Props (empty in this case)
        // Child elements
        [
            React.createElement("h1",{},"My React App"),
            React.createElement(Student),
            React.createElement(Student),
        ]
    );
};

// Get the root DOM node
const container = document.getElementById("root");
// Create a React root for rendering (React 18+ feature)
const root = ReactDOM.createRoot(container);
// Render the App component inside the root element
root.render(React.createElement(App));