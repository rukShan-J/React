import StudentCard from './components/StudentCard';
import './App.css';
import React from 'react';

function App() {

  const handleChange = (event) =>{
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange}></input>
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/>
    </div>
  );
}

export default App;
