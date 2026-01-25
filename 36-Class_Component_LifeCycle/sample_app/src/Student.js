import { Component } from 'react';

class Student extends Component {
  
    //constructor(props) function - used to initialize the state and bind methods
    constructor(props) {
        super(props);
        this.state = {year: 0};
    }

    //static getDerivedStateFromProps() - invoked right before calling the render method, both on the initial mount and on subsequent updates
    static getDerivedStateFromProps(nextProps, prevState) {
        const newYear = new Date().getFullYear() - nextProps.age; //calculate the year of birth
        console.log("getDerivedStateFromProps - ", newYear);
        if(newYear === prevState.year){
            return null; //no change to state
        }else{
            return ({year: newYear}); //update state
        }
    }

    render() {

        const { name, age } = this.props; //object destructuring

        return(
            <div>
                <h2>Name - {name}</h2>{/* displaying props data */}
                <h2>Age - {age}</h2>
                <h2>Year - {this.state.year}</h2>{/* displaying state data */}
            </div>
        );
    }
    
}

export default Student;