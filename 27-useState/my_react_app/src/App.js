import React from "react";
import StudentCard from "./components/StudentCard.jsx";
import "./App.css";

function App() {

  let x = 10;
  const handleChange = (event) =>{
    console.log(event.target.value);
    // const sampleText = document.getElementById("sample-text");
    // sampleText.innerHTML = event.target.value;
    x = event.target.value;
    console.log(x);
  }

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange}></input>
      <div>
        <p id="sample-text">{x}</p>
      </div>
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/>
    </div>
  );
}

export default App;
