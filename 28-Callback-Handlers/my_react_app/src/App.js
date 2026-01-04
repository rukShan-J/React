import React from "react";
import StudentCard from "./components/StudentCard.jsx";
import SearchBar from "./components/searchBar.jsx";
import "./App.css";

function App() {

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar />
      <div>
        <p id="sample-text"></p>
        <p id="sample-text-2"></p>
      </div>
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/>
    </div>
  );
}

export default App;
