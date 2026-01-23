import React,{Component} from "react";
import PropTypes from "prop-types";

class Student extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{name,age,homeTown} = this.props;
        return(
            <div>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{homeTown}</h3>
            </div>
        );
    }
}

// const Student = ({name,age,homeTown}) => {
//     return(
//         <div>
//             <h3>{name}</h3>
//             <h3>{age}</h3>
//             <h3>{homeTown}</h3>
//         </div>
//     )
// };

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    homeTown: PropTypes.string,
};

export default Student;