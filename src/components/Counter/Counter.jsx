import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
    state = { counter: 0 };

    componentDidMount() {
        setInterval(this.incrementCounter, 1000);
    }
    
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div className="counter">{this.state.counter} sec.</div>
        );
    }
}
