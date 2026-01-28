import React, {useState} from 'react';

const Button = ({text}) => {

    const[counter,setCounter] = useState(0);

    const mouseClick = (e) => {
        console.log("Button Clicked");
        setCounter(counter + 1);
    }

  return(

    <div>
      <button onClick={mouseClick}>{text}</button>
      <h6>{counter}</h6> {/* Displaying the click counter value */}
    </div>

  );

};

export default Button;