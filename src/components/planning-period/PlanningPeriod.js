import React from 'react';

class PlanningPeriod extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planningPeriods: [1, 5, 7, 15, 30]
        };
    };

    render() {
        return (
            <div className="planning-period">
                <h2 className="sr-only">Select a period:</h2>
                <p>You can choose here and create the number of day that allows a user to book your parking in advance</p>
                <div className="box">
                    <ol className="list-blocks">
                        {this.state.planningPeriods.map((period, index) => (
                            <li className="list-blocks__item" key={index}>
                                <div className="block">

                                    <div className="block__header">
                                        <button className="button--transparent">
                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1L13.2451 7.90983H20.5106L14.6327 12.1803L16.8779 19.0902L11 14.8197L5.12215 19.0902L7.36729 12.1803L1.48944 7.90983H8.75486L11 1Z" fill="white" stroke="#E5E5E5" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className="button--transparent">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7" cy="7" r="7" fill="#E7E7E7"/>
                                                <line x1="3" y1="7" x2="11" y2="7" stroke="#CC1A1A" strokeWidth="2"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="block__content">
                                        <h3 className="block__title">
                                            <strong className="block__title-value">{ period }</strong>
                                            day
                                        </h3>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    };
};

export default PlanningPeriod;
