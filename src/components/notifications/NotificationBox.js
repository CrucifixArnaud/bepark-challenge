import React from 'react';


class NotificationBox extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dismiss();
        }, parseInt(this.props.delay) || 2000)
    }

    render() {
        return (
            <div className="notification-box">
                <p className="notification-box__content">{ this.props.text }</p>
            </div>
        );
    };
};

export default NotificationBox;
