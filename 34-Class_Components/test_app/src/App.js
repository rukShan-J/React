import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Student from './Student';
import Search from './Search';

class App extends Component { // This is a class component

    constructor(props) {
        super(props);

        this.state = ({
            name: "Rukshan",
            age: 24
        })
    }

    render() {

        const{ name, age } = this.state; // Destructuring

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Search />  {/* Including Search component */}
                    <p>
                        Edit ... <code>src/App.js</code> and save to reload.
                    </p>
                    {/* <p>{this.state.name} is {this.state.age} years old.</p> */}
                    {/* <p>{name} is {age} years old.</p> */}
                    <Student name={name} age={age} />  {/* Passing props to Student component */}
                </header>
            </div>
        );
    }
};

export default App;