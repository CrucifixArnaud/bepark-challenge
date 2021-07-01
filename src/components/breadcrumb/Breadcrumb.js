import React from 'react';


class BreadCrumb extends React.Component {
    render() {
        return (
            <nav aria-label="Breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb__item">
                        <a className="breadcrumb__link" href="/">
                            Organisation
                        </a>
                    </li>
                    <li className="breadcrumb__item">
                        <a className="breadcrumb__link" href="/">
                            Parking[Name]
                        </a>
                    </li>
                    <li className="breadcrumb__item">
                        <a className="breadcrumb__link" href="/">
                            Administration
                        </a>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--current">
                        <a
                            aria-current="page"
                            className="breadcrumb__link breadcrumb__link--curent"
                            href="/">
                            Planning period
                        </a>
                    </li>
                </ol>
            </nav>
        );
    };
};

export default BreadCrumb;
