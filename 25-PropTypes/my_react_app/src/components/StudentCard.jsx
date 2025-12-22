import Student from "../components/Student";
import React from "react";
import PropTypes from "prop-types";

const StudentCard = ({name,age,homeTown}) => {
    return(
        <div className="st-card">
            <img 
            src="https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg" 
            alt={`Student Image_${name}`} 
            className="student-image" />
            <Student name={name} age={age} homeTown={homeTown}/>
        </div>
    )
};

StudentCard.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    homeTown: PropTypes.string,
};

export const test = 10;

export default StudentCard;