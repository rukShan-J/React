// const StudentCard = (props) => {
//   return React.createElement(
//     "div",
//     { className: "st-card" },
//     [
//       React.createElement("img", {
//         src: "https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg",
//         alt: "Student Image",
//         className: "student-image",
//       }),
//       React.createElement(Student, {...props}, null),
//     ]
//   );
// };

import Student from "../components/Student";

const StudentCard = () => {
    return(
        <div>
            <img 
            src="https://i.pinimg.com/736x/9e/43/2d/9e432dd715a57ffa3f7759a4e569655a.jpg" 
            alt="Student Image" 
            className="student-image" />
            <Student />
        </div>
    )
};

export default StudentCard;