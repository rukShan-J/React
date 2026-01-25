import { Component } from 'react';

class Student extends Component {
  
    constructor(props) {
        super(props);
    }

    render() {

        const { name, age } = this.props; //object destructuring

        return(
            <div>
                <h2>Name - {name}</h2>{/* displaying props data */}
                <h2>Age - {age}</h2>
            </div>
        );
    }
    
}

export default Student;