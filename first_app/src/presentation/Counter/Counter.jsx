import React from 'react';
import Message from '../Message/Message';


class Counter extends React.Component {

    state = {
        value: 0,
        text: "Counter Text",
        message: "Counter Message"
    };

    handleClick = event => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            };
        });
    };


    render() {
        const {value, text, message} = this.state;
        return (
            <div>

                <button onClick={this.handleClick}>Increase Counter</button>

                <hr />
                <Message text={`Counter - ${value}`} status="success" />
                <Message text={`Text - ${text}`} status="success"/>
                <Message text={`Message - ${message}`} status="danger" />
            </div>
        );
    }
}

export default Counter;