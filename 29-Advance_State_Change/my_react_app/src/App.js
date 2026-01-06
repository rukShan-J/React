import React,{useState} from "react";
import StudentCard from "./components/StudentCard.jsx";
import SearchBar from "./components/searchBar.jsx";
import "./App.css";

function App() {

  const [text,setText] = useState("10");

  const studentList = [
    {name:"Dasun", age:17, town:"Gampaha"},
    {name:"Kasun", age:18, town:"Negombo"},
    {name:"Pasan", age:19, town:"Colombo"}
  ]

  const searchChange = (event) => {
    console.log("Input changed:", event.target.value);
    setText(event.target.value);
  }

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange}/>
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text-2"></p>
      </div>

      {
        studentList.map((student,index)=>{
          return(
            <
              StudentCard
              key={index}
              name={student.name}
              age={student.age}
              homeTown={student.town}
            />
          )
        })
      }
      
      <StudentCard name="Amal" age={text} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/>
    </div>
  );
}

export default App;
