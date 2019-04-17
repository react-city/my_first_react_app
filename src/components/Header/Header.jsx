import React from 'react';
import Counter from '../Counter/Counter';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                You have been staing on this website for
                <Counter />
            </div>
        );
    }
}