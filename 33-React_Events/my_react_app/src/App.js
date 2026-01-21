import React,{useState} from "react";
import StudentCard from "./components/StudentCard.jsx";
import SearchBar from "./components/searchBar.jsx";
import "./App.css";

function App() {

  const [text,setText] = useState("");

  const studentList = [
    {name:"Dasun", age:17, town:"Gampaha"},
    {name:"Kasun", age:18, town:"Negombo"},
    {name:"Pasan", age:19, town:"Colombo"}
  ]

  // Filtered students whose age is greater than input value
  // const searchedStudents = studentList.filter((student) => (student.age > text));

  // Filtered students by name
  const searchedStudents = studentList.filter((student) => 
    student.name.toLowerCase().includes(text.toLowerCase())
  );

  const searchChange = (event) => {
    console.log("Input changed:", event.target.value);
    setText(event.target.value);
  }

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange} searchText={text}/>
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text-2"></p>
      </div>

      {
        searchedStudents.map((student,index)=>{
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
      
      {/* <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={21} homeTown="Negombo"/>
      <StudentCard name="Nimal" age={22} homeTown="Colombo"/> */}
    </div>
  );
}

export default App;
