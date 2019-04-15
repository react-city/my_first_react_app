import React from 'react';
import Counter from '../Counter/Counter';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                Hello world!
                <Counter />
            </div>
        );
    }
}