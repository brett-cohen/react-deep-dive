import React from 'react';

class StatefulComponent extends React.Component{
    // State needs to be initialized in the class constructor
    constructor(props) {
        super(props);
        this.state = {message: ""};
    }

    render() {
        return (
            <div>
                <input
                    type={"text"}
                    // Our input field will always display the value currently stored in state
                    value={this.state.message}
                    // Thanks to setState(), what our user types will be saved into the class's state
                    onChange={(e) => {this.setState({message: e.target.value})}}/>
                {
                // The state is also displayed down here. This element will automatically re-render and display the new
                // state data as it is updated
                }
                <p>You typed: {this.state.message}</p>
            </div>
        )
    }
}