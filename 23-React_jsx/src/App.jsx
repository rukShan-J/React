import React from "react";
import ReactDOM from "react-dom/client";
import StudentCard, { test } from "./components/StudentCard";
import { test } from "./components/StudentCard";
console.log(test);

// // Main App component
// const App = () => {
//   // Define a React component using a function
//   return React.createElement(
//     "div",
//     {},
//     [
//       React.createElement("h1", {}, "My React App"),

//       // React.createElement(StudentCard)   // *Updated

//       // Multiple StudentCard components with props
//       React.createElement(StudentCard,{
//         name: "Amal",
//         age:20,
//         homeTown:"Gampaha"
//       },null)
//     ]
//   );
// };



const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      {/* <StudentCard /> */}
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>;
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>;
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/>
    </div>
  );
};

// Get the root DOM node
const container = document.getElementById("root");

// Create a React root for rendering (React 18+ feature)
const root = ReactDOM.createRoot(container);

// Render the App component inside the root element
root.render(React.createElement(App));
