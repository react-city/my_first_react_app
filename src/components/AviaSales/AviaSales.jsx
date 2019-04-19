import React from 'react';
import './AviaSales.css';

export default class AviaSales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flights: [], error: null, pricesIsOpen: false};
    }

    getFlights() {
        const token = '76d0c0460e16b3591eb5b390af2c7343';
        const url = `https://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=${token}`;

        return fetch(url);
    }

    handleClick = () => {
        const { flights, pricesIsOpen } = this.state;

        if (!pricesIsOpen && flights.length === 0) {
            this.getFlights()
                .then(res => res.json())
                .then(res => this.setState({flights: res.data || [], pricesIsOpen: true}))
                .catch(error => this.setState({error}))
        } else {
            this.setState({pricesIsOpen: !pricesIsOpen});
        }
    }

    render() {
        const { flights, pricesIsOpen, error } = this.state;
        let classes = ['avia-sales__prices'];
        
        pricesIsOpen && classes.push('avia-sales__prices--open');
        classes = classes.join(' ');

        if (error) {
            return (
                <div className="avia-sales__error">
                    При получении данных произошла ошибка
                </div>
            );
        }

        return (
            <div className="avia-sales">
                <button className="avia-sales__open" onClick={this.handleClick}>
                    {pricesIsOpen ? ' Скрыть ' : 'Показать '}
                    самые дешевые авиабилеты
                </button>
                <ul className={classes}>
                    {flights.map((flight, i) => (
                        <li key={i} className="avia-sales__item">
                            <span className="avia-sales__depart-date">{flight.depart_date}</span>
                            <span> | </span>
                            <span className="avia-sales__origin">{flight.origin}</span>
                            <span> - </span>
                            <span className="avia-sales__destination">{flight.destination}</span>
                            <span> | </span>
                            <span className="avia-sales__value">{flight.value} руб.</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
