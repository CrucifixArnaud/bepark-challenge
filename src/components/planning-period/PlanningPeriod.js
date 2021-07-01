import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

class PlanningPeriod extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: 30,
            periods: [1, 2, 5, 8, 30],
            isNewPeriodFormVisible: false,
            defaultPeriodValue: 0
        };
    };

    // Display the new period box
    handleAddPeriodClick() {
        this.setState({
            isNewPeriodFormVisible: true
        }, () => {
            this.newPeriodInput.focus();
        });
    };

    // Remove the clicked period
    handleRemovePeriodClick(value) {
        let periods = this.state.periods;

        const numberIndex = periods.indexOf(value);

        if (numberIndex > -1) {
            periods.splice(numberIndex, 1);

            this.sortPeriods();

            this.setState(prevState => ({
                periods: periods,
            }));
        }
    };

    // Set the click period to favorite
    handleFavoriteClick(value) {
        this.setState(prevState => ({
            favorite: value,
        }));
    };

    // Save new period input value
    handlePeriodInputBlur(e) {
        let periods = this.state.periods;
        const target = e.target;

        if (target.value) {
            periods.push(parseInt(target.value));
        }

        this.setState({
            isNewPeriodFormVisible: false,
            periods: periods,
        }, () => {
            this.sortPeriods();
        });
    }

    // Sort periods in an ascending order
    sortPeriods() {
        let periods = this.state.periods;

        periods.sort((a, b) => {
            return a - b;
        });

        this.setState(prevState => ({
            periods: periods,
        }));
    }

    render() {
        return (
            <div className="planning-period">
                <h2 className="sr-only">Select a period:</h2>
                <p>You can choose here and create the number of day that allows a user to book your parking in advance</p>
                <div className="box">
                    <Flipper flipKey={this.state.periods.join("") + this.state.isNewPeriodFormVisible} stagger>
                    <ul className="list-blocks">
                        {this.state.periods.map(period => (
                            <Flipped key={period} flipId={period} translate>
                                <li className="list-blocks__item">
                                    <div className="block">
                                        <div className="block__header">
                                            <button
                                                className={`button--icon ${this.state.favorite === period ? "button--selected" : ""}`}
                                                onClick={ (e) => this.handleFavoriteClick(period)}
                                                title={ `Select this period (${period.value})` }>
                                                <svg className="button__icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 1L13.2451 7.90983H20.5106L14.6327 12.1803L16.8779 19.0902L11 14.8197L5.12215 19.0902L7.36729 12.1803L1.48944 7.90983H8.75486L11 1Z" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                            <button
                                                className={`block__button button--transparent ${period === this.state.favorite ? "hidden" : ""}`}
                                                onClick={ (e) => this.handleRemovePeriodClick(period, e) }>
                                                <svg className="button__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="7" cy="7" r="7" fill="#E7E7E7"/>
                                                    <line x1="3" y1="7" x2="11" y2="7" stroke="#CC1A1A" strokeWidth="2"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="block__content">
                                            <p className="block__title">
                                                <strong className="block__title-value">{ period }</strong>
                                                day
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </Flipped>
                        ))}
                        {this.state.isNewPeriodFormVisible &&
                            <Flipped flipId="flip-item-new-period" opacity>
                                <li className="list-blocks__item list-blocks__item--new">
                                        <div className="block">
                                            <div className="block__content">
                                                <div className="block__title">
                                                    <input
                                                        ref={(input) => { this.newPeriodInput = input; }}
                                                        className="block__input field--text--transparent block__title-value"
                                                        type="number"
                                                        placeholder={this.state.defaultPeriodValue}
                                                        onBlur={ (e) => this.handlePeriodInputBlur(e) } />
                                                    day
                                                </div>
                                            </div>
                                        </div>
                                </li>
                            </Flipped>
                        }
                        <Flipped flipId="flip-item-add-period" translate>
                            <li className="list-blocks__item">
                                <button
                                    className="button--transparent block--transparent"
                                    onClick={ (e) => this.handleAddPeriodClick(e) }>
                                    <svg className="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#E7E7E7"/>
                                        <line x1="18" y1="12" x2="6" y2="12" stroke="#2EAD73" strokeWidth="2"/>
                                        <line x1="12" y1="6" x2="12" y2="18" stroke="#2EAD73" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </li>
                        </Flipped>
                    </ul>
                </Flipper>
                </div>
            </div>
        );
    };
};

export default PlanningPeriod;
