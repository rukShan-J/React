import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Student from './Student';
import Search from './Search';

// make the app component into a class component
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Rukshan", //passing data to student component
      age: 24
    };
  }

  onSearch = (event) => {
    this.setState({ name: event.target.value }); //update state with input value
  }

  render(){

    const { name, age } = this.state; //object destructuring

    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Search onSearch={this.onSearch} /> {/* including the Search component */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Student name={this.state.name} age={this.state.age} />
        
      </header>
    </div>
    );
  }

}

export default App;
