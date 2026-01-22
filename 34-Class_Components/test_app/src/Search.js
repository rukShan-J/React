import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        } 
    }

    onSearch = (event) => {
        console.log("Searching for:", event.target.value);
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={this.onSearch} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Search;