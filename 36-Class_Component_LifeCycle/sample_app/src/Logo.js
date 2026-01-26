import {Component} from 'react';
import logo from './logo.svg';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    //componentWillUnmount() - invoked immediately before a component is unmounted and destroyed
    componentWillUnmount() {
        console.log("componentWillUnmount - Logo Component Unmounted");
        alert("Logo will be removed!");
    }

    render() {
        return (
            <>
                <img src={logo} style={{animationDuration: `${this.props.animationDuration}s`}} alt="logo-2" className="App-logo" /> {/* displaying logo image */}
            </>
            
        );
    }
}

export default Logo;