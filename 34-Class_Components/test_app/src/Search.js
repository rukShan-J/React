import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
    }

    onSearch(event) {
        console.log("Searching for:", event.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={this.onSearch} />
            </div>
        );
    }
}

export default Search;