// import { Fragment } from "react/jsx-runtime";
// import React from "react";

const ListItems = ({items}) => {
    return(
        // <div> 
        // <Fragment>
        // <React.Fragment>
        <>
            {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </>
        // </React.Fragment>
        // </Fragment>
        // </div>
    );
}

export default ListItems;