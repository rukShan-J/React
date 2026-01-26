import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    onSearch = (event) => {
        this.setState({ text: event.target.value }); //update state with input value
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.onSearch}
                    placeholder="Search..." 
                ></input>
                <p>Searching for: {this.state.text}</p>
            </div>
        );
    }
}

export default Search;