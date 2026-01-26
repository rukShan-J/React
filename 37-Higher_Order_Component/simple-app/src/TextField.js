import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <input
                type="text"
                placeholder='type your text...'
            />
        );
    }
}

export default TextField;