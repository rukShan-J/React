import {Component} from 'react';
import logo from './logo.svg';

class Logo extends Component {
    constructor(props) {
        super(props);
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