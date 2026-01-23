import Student from "./Student.jsx";
import React,{Component} from "react";
import PropTypes from "prop-types";

class StudentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{name,age,homeTown} = this.props;
        return(
            <div className="st-card">
                <img 
                src="https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg" 
                alt={`Student Image_${name}`} 
                className="student-image" />
                <Student name={name} age={age} homeTown={homeTown}/>
            </div>
        );
    }
}

// const StudentCard = ({name,age,homeTown}) => {
//     return(
//         <div className="st-card">
//             <img 
//             src="https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg" 
//             alt={`Student Image_${name}`} 
//             className="student-image" />
//             <Student name={name} age={age} homeTown={homeTown}/>
//         </div>
//     );
// };

StudentCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    homeTown: PropTypes.string,
};

export const test = 10;

export default StudentCard;