import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './aviaTickets.css';
import { Checkbox } from 'antd';
import s7Logo from './s7logo.svg'





class AviaTickets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: {},
            id: "",
        }
    }

    componentDidMount() {
        this.getId()
    }

    getId = () => {
        const axios = require('axios');
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then((response) => {
                console.log(response.data.searchId)
                this.setState({
                    id: response.data.searchId,
                })
        })
    }

    render() {
        console.log(this.state.id)
        const axios = require('axios');
        const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${this.state.id}`
        axios.get(url)
            .then((response) => {
                this.setState({
                    tickets: response.data,
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);

            })
            .then(function () {
                // always executed
            });

        // console.log(this.state.tickets.tickets[0])

        return (
            <div className="main">
                <div className="logo-container">
                    <img src={logo} className="aviaTickets-logo" alt="logo"/>
                </div>
                <div className="main__content">
                    <div className="filter-menu">
                        <p className="filter-menu--title">Количество пересадок</p>
                        <Checkbox>Все</Checkbox>
                        <Checkbox>Без пересадок</Checkbox>
                        <Checkbox>1 пересадка</Checkbox>
                        <Checkbox>2 пересадки</Checkbox>
                        <Checkbox>3 пересадки</Checkbox>
                    </div>
                    <div className="tickets-area">
                        <div className='tabs-container'>
                            <button className="tab">Самый дешевый</button>
                            <button className="tab">Самый быстрый</button>
                        </div>
                        {/*билеты:*/}
                        <div className='ticket-container'>
                            <div className="ticket-container__title">
                                <span className="ticket-container__title--price" >13 300</span>
                                <img className="ticket-container__title--logo" src={s7Logo} alt="airCompanylogo"/>
                            </div>
                            <div className="ticket-container__body">

                                <div className="first-row">
                                    <div className="ticket-container__row">
                                        <div className="ticket-container__item ticket-container__item--title">MOW – HKT</div>
                                        <div className="ticket-container__item ticket-container__item--title">В пути</div>
                                        <div className="ticket-container__item ticket-container__item--title">2 пересадки</div>
                                    </div>
                                    <div className="ticket-container__row">
                                        <div className="ticket-container__item ticket-container__item--info">10:45 – 08:00</div>
                                        <div className="ticket-container__item ticket-container__item--info">21ч 15м</div>
                                        <div className="ticket-container__item ticket-container__item--info">HKG, JNB</div>
                                    </div>
                                </div>

                                <div className="second-row">
                                    <div className="ticket-container__row">
                                        <div className="ticket-container__item ticket-container__item--title">MOW – HKT</div>
                                        <div className="ticket-container__item ticket-container__item--title">В пути</div>
                                        <div className="ticket-container__item ticket-container__item--title">2 пересадки</div>
                                    </div>
                                    <div className="ticket-container__row">
                                        <div className="ticket-container__item ticket-container__item--info">10:45 – 08:00</div>
                                        <div className="ticket-container__item ticket-container__item--info">21ч 15м</div>
                                        <div className="ticket-container__item ticket-container__item--info">HKG, JNB</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AviaTickets;
