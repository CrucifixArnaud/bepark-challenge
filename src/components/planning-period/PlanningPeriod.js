import React from 'react';
import { CSSTransition } from "react-transition-group";

import { getObjetIndexByKey } from "utils/helpers/array.js";

class PlanningPeriod extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planningPeriods: [{
                    "value": 1,
                    "favorite": false
                }, {
                    "value": 5,
                    "favorite": false
                }, {
                    "value": 7,
                    "favorite": false
                }, {
                    "value": 15,
                    "favorite": false
                }, {
                    "value": 30,
                    "favorite": true
                }]
        };
    };

    // Select a period
    handleFavoriteClick(value) {
        let planningPeriods = this.state.planningPeriods.slice();

        const periodIndex = getObjetIndexByKey(planningPeriods, "value", value);

        if (periodIndex > -1) {

            this.resetFavoritePeriods();

            // Toggle the favorite boolean value
            planningPeriods[periodIndex].favorite = !planningPeriods[periodIndex].favorite;

            this.setState(prevState => ({
                planningPeriods: planningPeriods
            }));
        }
    }

    // Set all period to un favorite
    resetFavoritePeriods() {
        let planningPeriods = this.state.planningPeriods.slice();

        planningPeriods.map((period, index) => {
            return period.favorite = false;
        });

        this.setState(prevState => ({
            planningPeriods: planningPeriods
        }));
    }

    // Remove a period
    handleRemovePeriodClick(value) {
        let planningPeriods = this.state.planningPeriods.slice();

        const periodIndex = getObjetIndexByKey(planningPeriods, "value", value);

        if (periodIndex > -1) {
            planningPeriods.splice(periodIndex, 1);

            this.setState(prevState => ({
                planningPeriods: planningPeriods
            }));
        }
    }

    render() {
        return (
            <div className="planning-period">
                <h2 className="sr-only">Select a period:</h2>
                <p>You can choose here and create the number of day that allows a user to book your parking in advance</p>
                <div className="box">
                    <ol className="list-blocks">
                        {this.state.planningPeriods.map((period, index) => (
                            <li className="list-blocks__item" key={index}>
                                <div className={`block ${period.favorite ? "block--selected" : ""}`}>
                                    <div className="block__header">
                                        <button
                                            className={`button--icon ${period.favorite ? "button--selected" : ""}`}
                                            onClick={ (e) => this.handleFavoriteClick(period.value, e) }
                                            title={ `Select this period (${period.value})` }>
                                            <svg className="button__icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1L13.2451 7.90983H20.5106L14.6327 12.1803L16.8779 19.0902L11 14.8197L5.12215 19.0902L7.36729 12.1803L1.48944 7.90983H8.75486L11 1Z" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <CSSTransition
                                            nodeRef={React.createRef()} // Avoid issue with findDOMNode in strict mode and react transition group (That's a quick and probably dirty solution, should be investigated)
                                            in={!period.favorite}
                                            timeout={200}
                                            classNames="fade"
                                            unmountOnExit>
                                            <button
                                                className="button--transparent"
                                                onClick={ (e) => this.handleRemovePeriodClick(period.value, e) }>
                                                <svg className="button__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="7" cy="7" r="7" fill="#E7E7E7"/>
                                                    <line x1="3" y1="7" x2="11" y2="7" stroke="#CC1A1A" strokeWidth="2"/>
                                                </svg>
                                            </button>
                                        </CSSTransition>
                                    </div>

                                    <div className="block__content">
                                        <p className="block__title">
                                            <strong className="block__title-value">{ period.value }</strong>
                                            day
                                        </p>
                                    </div>

                                </div>
                            </li>
                        ))}
                        <li className="list-blocks__item">
                            <button className="button--transparent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#E7E7E7"/>
                                    <line x1="18" y1="12" x2="6" y2="12" stroke="#2EAD73" strokeWidth="2"/>
                                    <line x1="12" y1="6" x2="12" y2="18" stroke="#2EAD73" strokeWidth="2"/>
                                </svg>
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        );
    };
};

export default PlanningPeriod;
