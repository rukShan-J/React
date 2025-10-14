import React from "react";
import ReactDOM from "react-dom";

// Add a Student component
// const Student = () => {
const Student = (props) => {     // *Updated
  return React.createElement(
    "div", // Parent div
    {}, // No props
    [
      // React.createElement("h3", {}, "Kamal"),
      // *Updated
      React.createElement("h3", {}, props.name),      // Name
      React.createElement("h3", {}, props.age),       // Age
      React.createElement("h3", {}, props.homeTown),  // City
    ],
  );
};


// StudentCard component — wraps Student and an image
const StudentCard = (props) => {
  return React.createElement(
    "div",
    { className: "st-card" },
    [
      // Image element
      React.createElement("img", {
        src: "https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg",
        alt: "Student Image",
        className: "student-image",
      }),

      // Nested Student component, passing all props
      React.createElement(Student, {...props}, null),
    ]
  );
};

// Main App component
const App = () => {
  // Define a React component using a function
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "My React App"),

      // React.createElement(StudentCard)   // *Updated

      // Multiple StudentCard components with props
      React.createElement(StudentCard,{
        name: "Amal",
        age:20,
        homeTown:"Gampaha"
      },null),
      React.createElement(StudentCard,{
        name: "Kamal",
        age:25,
        homeTown:"Colombo"
      },null),
      React.createElement(StudentCard,{
        name: "Nimal",
        age:18,
        homeTown:"Negombo"
      }), 
    ]
  );
};

// Get the root DOM node
const container = document.getElementById("root");

// Create a React root for rendering (React 18+ feature)
const root = ReactDOM.createRoot(container);

// Render the App component inside the root element
root.render(React.createElement(App));
