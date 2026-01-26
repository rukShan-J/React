import { Component } from 'react';
import Logo from './Logo';

class Student extends Component {
  
    //constructor(props) function - used to initialize the state and bind methods
    constructor(props) {
        super(props);
        this.state = {year: 0, color: 'black', speed: 3, visible: true}; //initializing state if visible value is false Logo component will be unmounted
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

    //shouldComponentUpdate() - invoked before rendering when new props or state are being received
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return true; //allow re-rendering
        if(nextProps.name.length > 2){ //only allow re-rendering if name length is greater than 2
            return true; //allow re-rendering
        } else {
            return false; //prevent re-rendering
        }
    }

    //getSnapshotBeforeUpdate() - invoked right before the most recently rendered output is committed to the DOM
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return prevProps.name //no snapshot value needed
    }

    //componentDidUpdate() - invoked immediately after updating occurs
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate - Component Updated");
        console.log("Previous Name Prop: ", snapshot);

        // //example check - if name prop is not equal to speed state
        // if(this.props.name !== this.state.speed){
        //     console.log("name is not equal to speed, updating speed");
        //     this.setState({speed: this.props.name}); //update speed state with name prop's name value
        // } else {
        //     console.log("name is equal to speed, no update needed");
        // }
    }

    removeHandler = (event) => {
        this.setState({visible: false}); //set visible to false to unmount Logo component
    }

    render() {

        const { name, age } = this.props; //object destructuring

        return(
            <div style={{backgroundColor: this.state.color}}>
                {this.state.visible && <Logo animationDuration={this.state.speed} />} {/* including the Logo component */}
                <h2>Name - {name}</h2>{/* displaying props data */}
                <h2>Age - {age}</h2>
                <h2>Year - {this.state.year}</h2>{/* displaying state data */}
                <input 
                    type="button" 
                    value="Remove Logo" 
                    onClick = {this.removeHandler}
                /> {/* toggle Logo component visibility */}
            </div>
        );
    }
    
}

export default Student;