import React from "react";
import PropTypes from "prop-types";

const Student = ({name,age,homeTown}) => {

    const handleWheel = (event) => {
        // console.log("OnWheel Event");
        console.log(event.deltaY);  
        if(event.deltaY > 0){
            console.log("Scrolling Up");
        } else{
            console.log("Scrolling Down");
        };
    };

    return(
        <div>
            <h3>{name}</h3>
            <h3 onWheel={handleWheel}>{age}</h3>
            <h3>{homeTown}</h3>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    homeTown: PropTypes.string,
};

export default Student;