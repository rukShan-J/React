import { Component } from "react";

function LabeledTextField( NormalTextField, labelText ) {

    class finalTextField extends Component {

        render() {
            return(
                <>
                    <div>{labelText}</div>
                    <NormalTextField />
                </>
            );
        }
    }

    return finalTextField;

}

export default LabeledTextField;