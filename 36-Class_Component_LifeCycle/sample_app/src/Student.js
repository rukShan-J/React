import { Component } from 'react';

class Student extends Component {
  
    //constructor(props) function - used to initialize the state and bind methods
    constructor(props) {
        super(props);
        this.state = {year: 0, color: 'black'}; //initializing state
    }

    //static getDerivedStateFromProps() - invoked right before calling the render method, both on the initial mount and on subsequent updates
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        const newYear = new Date().getFullYear() - nextProps.age; //calculate the year of birth
        console.log("getDerivedStateFromProps - ", newYear);
        if(newYear === prevState.year){
            return null; //no change to state
        }else{
            return ({year: newYear}); //update state
        }
    }

    //componentDidMount() - invoked immediately after a component is mounted (inserted into the tree)
    componentDidMount() {
        console.log("componentDidMount - Component Mounted");
        setTimeout(() => {
            this.setState({color: 'red'}); //change color after 3 seconds
        }, 3000);
    }

    render() {

        const { name, age } = this.props; //object destructuring

        return(
            <div style={{backgroundColor: this.state.color}}>
                <h2>Name - {name}</h2>{/* displaying props data */}
                <h2>Age - {age}</h2>
                <h2>Year - {this.state.year}</h2>{/* displaying state data */}
            </div>
        );
    }
    
}

export default Student;