// const Student = (props) => {
//   return React.createElement(
//     "div",
//     {},
//     [
//       React.createElement("h3", {}, props.name),
//       React.createElement("h3", {}, props.age),
//       React.createElement("h3", {}, props.homeTown),
//     ],
//   );
// };

import React from "react";

// const Student = () => {
//     return(
//         <div>
//             <h3>Amal</h3>
//             <h3>23</h3>
//             <h3>Gampaha</h3>
//         </div>
//     )
// };

    const Student = ({name,age,homeTown}) => {
        return(
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{homeTown}</h3>
        </div>
    )
    }

export default Student;