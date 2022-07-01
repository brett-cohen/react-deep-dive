import React from 'react';

class LifecycleComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message: "Hello!"};
    }

    async getDataFromBackend() {
        // Pretend this makes a call to an external service
        await new Promise(r => setTimeout(r, 5000));
        return "Goodbye!";
    }

    cleanUp() {
        console.log("Cleaning up");
    }

    // This is run when the component is created
    componentDidMount() {
        const messageFromServer = this.getDataFromBackend();
        this.setState({message: messageFromServer});
    }

    // This is run when the component is destroyed
    componentWillUnmount() {
        this.cleanUp()
    }

    render() {
        return (
            <p>Message from server: {this.state.message}</p>
        )
    }
}