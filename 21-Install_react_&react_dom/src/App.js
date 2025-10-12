// Add a Student component
const Student = () => {
  return React.createElement(
    "div", // Parent div
    {}, // No props
    [
      // Child elements (array of React elements)
      React.createElement("h3", {}, "Kamal"), // Name
      React.createElement("h3", {}, 20), // Age
      React.createElement("h3", {}, "Gampaha"), // City
    ],
  );
};

// Add a StudentCard component
const StudentCard = () => {
  return React.createElement(
    "div", // Parent wrapper
    { className: "st-card" },
    [
      // Image element
      React.createElement("img", {
        src: "https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg",
        alt: "Student Image",
        className: "student-image",
      }),
      // Nested Student component
      React.createElement(Student),
    ],
  );
};

// Main App component
const App = () => {
  // Define a React component using a function
  return React.createElement(
    "div", // HTML element type
    {}, // Props (empty in this case)
    // Child elements
    [
      React.createElement("h1", {}, "My React App"),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
    ],
  );
};

// Get the root DOM node
const container = document.getElementById("root");

// Create a React root for rendering (React 18+ feature)
const root = ReactDOM.createRoot(container);

// Render the App component inside the root element
root.render(React.createElement(App));
